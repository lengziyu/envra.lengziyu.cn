import { useEffect, useMemo, useState } from "react";
import { Locale, content } from "./content";
import env1 from "./assets/env1.png";
import env2 from "./assets/env2.png";
import env3 from "./assets/env3.png";
import env4 from "./assets/env4.png";
import env5 from "./assets/env5.png";

const REPO_URL = "https://github.com/lengziyu/Envra";
const RELEASES_URL = "https://github.com/lengziyu/Envra/releases";
const RELEASE_LATEST_URL = "https://github.com/lengziyu/Envra/releases/latest";
const README_ZH = "https://github.com/lengziyu/Envra/blob/main/README.zh-CN.md";
const README_EN = "https://github.com/lengziyu/Envra/blob/main/README.md";
const HOME_URL = "https://lengziyu.cn";
const NAV_URL = "https://nav.lengziyu.cn";

type ThemeMode = "light" | "dark";

function getInitialLocale(): Locale {
  const saved = localStorage.getItem("envra-site-locale");
  if (saved === "zh" || saved === "en") return saved;
  return navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
}

function getInitialTheme(): ThemeMode {
  const saved = localStorage.getItem("envra-site-theme");
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function App() {
  const [locale, setLocale] = useState<Locale>(getInitialLocale);
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);
  const [slideIndex, setSlideIndex] = useState(0);
  const [isImageZoomOpen, setIsImageZoomOpen] = useState(false);

  const t = useMemo(() => content[locale], [locale]);
  const activeSlide = t.screenshotSection.slides[slideIndex];
  const slideImages = [env1, env2, env3, env4, env5];

  useEffect(() => {
    document.documentElement.lang = t.htmlLang;
    document.title = t.pageTitle;
  }, [t]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("envra-site-theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("envra-site-locale", locale);
  }, [locale]);

  useEffect(() => {
    setSlideIndex(0);
  }, [locale]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % t.screenshotSection.slides.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, [t.screenshotSection.slides.length]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsImageZoomOpen(false);
    };
    if (isImageZoomOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isImageZoomOpen]);

  useEffect(() => {
    const targets = document.querySelectorAll(
      ".section, .stat-card, .feature-card, .download-card, .faq-item, .hero-panel, .extra-card"
    );
    targets.forEach((el) => el.classList.add("reveal-target"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.18 }
    );
    targets.forEach((el) => observer.observe(el));

    const tiltTargets = document.querySelectorAll(
      ".main-btn, .sub-btn, .ghost-btn, .stat-card, .feature-card, .download-card"
    );
    const onMove = (event: Event) => {
      const e = event as MouseEvent;
      const el = e.currentTarget as HTMLElement;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const px = x / rect.width;
      const py = y / rect.height;
      el.style.setProperty("--mx", `${x}px`);
      el.style.setProperty("--my", `${y}px`);
      el.style.setProperty("--rx", `${(0.5 - py) * 3.2}deg`);
      el.style.setProperty("--ry", `${(px - 0.5) * 3.2}deg`);
    };
    const onLeave = (event: Event) => {
      const el = event.currentTarget as HTMLElement;
      el.style.setProperty("--rx", "0deg");
      el.style.setProperty("--ry", "0deg");
    };
    tiltTargets.forEach((el) => {
      el.classList.add("tilt-target");
      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      observer.disconnect();
      tiltTargets.forEach((el) => {
        el.removeEventListener("mousemove", onMove);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  const switchLocale = () => setLocale((prev) => (prev === "zh" ? "en" : "zh"));
  const switchTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <div className="page">
      <div className="bg-layer" aria-hidden="true">
        <span className="blob blob-cyan" />
        <span className="blob blob-gold" />
        <span className="mesh" />
      </div>

      <header className="topbar">
        <a className="brand" href="#top" aria-label="Envra Home">
          <img src="/envra-logo.png" alt="Envra logo" width={38} height={38} />
          <span>Envra</span>
        </a>

        <nav className="nav">
          <a href="#download">{t.nav.download}</a>
          <a href="#features">{t.nav.features}</a>
          <a href="#faq">{t.nav.faq}</a>
        </nav>

        <div className="actions">
          <button className="ghost-btn" onClick={switchLocale} aria-label={t.switchers.lang}>
            {locale === "zh" ? "EN" : "中"}
          </button>
          <button className="ghost-btn" onClick={switchTheme} aria-label={t.switchers.theme}>
            {theme === "light" ? "☾" : "☀"}
          </button>
          <a className="main-btn small" href={REPO_URL} target="_blank" rel="noreferrer">
            {t.nav.github}
          </a>
        </div>
      </header>

      <main id="top">
        <section className="section hero">
          <div className="hero-copy">
            <p className="eyebrow">{t.hero.badge}</p>
            <h1 className="hero-name">{t.hero.title}</h1>
            <p className="subtitle">{t.hero.subtitle}</p>
            <div className="hero-actions">
              <a className="main-btn" href="#download">
                {t.hero.primary}
              </a>
              <a className="sub-btn" href={REPO_URL} target="_blank" rel="noreferrer">
                {t.hero.secondary}
              </a>
            </div>
            <p className="hero-note">{t.hero.note}</p>

            <div className="stats in-hero compact">
              {t.highlights.map((item) => (
                <article key={item.label} className="stat-card glass">
                  <span className="stat-icon" aria-hidden="true">
                    <Icon kind={item.icon} />
                  </span>
                  <div>
                    <p>{item.label}</p>
                    <strong>{item.value}</strong>
                  </div>
                </article>
              ))}
            </div>

          </div>

          <aside className="hero-panel glass">
            <div className="hero-panel-head">
              <h3>{activeSlide.title}</h3>
              <div className="tag-list align-right">
                {activeSlide.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <ul>
              {activeSlide.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <div className="carousel-preview">
              <div className="preview-main">
                <img
                  className="carousel-image"
                  src={slideImages[slideIndex]}
                  alt={activeSlide.title}
                  loading="lazy"
                  onClick={() => setIsImageZoomOpen(true)}
                />
              </div>
            </div>

            <div className="carousel-dots-in">
              {t.screenshotSection.slides.map((slide, index) => (
                <button
                  key={slide.title}
                  className={index === slideIndex ? "pager-dot active" : "pager-dot"}
                  onClick={() => setSlideIndex(index)}
                  aria-label={slide.title}
                />
              ))}
            </div>
          </aside>
        </section>

        <section id="download" className="section">
          <p className="eyebrow">{t.downloadSection.badge}</p>
          <h2>{t.downloadSection.title}</h2>
          <p className="subtitle">{t.downloadSection.subtitle}</p>

          <div className="card-grid three">
            {t.downloadSection.cards.map((card) => (
              <article key={card.platform} className="download-card glass">
                <h3>{card.platform}</h3>
                <p>{card.desc}</p>
                <a className="main-btn" href={RELEASE_LATEST_URL} target="_blank" rel="noreferrer">
                  {card.action}
                </a>
              </article>
            ))}
          </div>

          <div className="card-grid two extras-grid">
            <article className="info-card glass extra-card">
              <h3>{t.downloadSection.extras[0].title}</h3>
              <p>{t.downloadSection.extras[0].desc}</p>
              <a className="sub-btn" href={RELEASES_URL} target="_blank" rel="noreferrer">
                {t.downloadSection.extras[0].action}
              </a>
            </article>
            <article className="info-card glass extra-card">
              <h3>{t.downloadSection.extras[1].title}</h3>
              <p>{t.downloadSection.extras[1].desc}</p>
              <a
                className="sub-btn"
                href={locale === "zh" ? README_ZH : README_EN}
                target="_blank"
                rel="noreferrer"
              >
                {t.downloadSection.extras[1].action}
              </a>
            </article>
          </div>
        </section>

        <section id="features" className="section">
          <p className="eyebrow">{t.featureSection.badge}</p>
          <h2>{t.featureSection.title}</h2>
          <div className="card-grid three">
            {t.featureSection.cards.map((card) => (
              <article key={card.title} className="info-card glass feature-card">
                <span className="feature-icon" aria-hidden="true">
                  <Icon kind={card.icon} />
                </span>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <p className="eyebrow">{t.techSection.badge}</p>
          <h2>{t.techSection.title}</h2>
          <p className="subtitle">{t.techSection.subtitle}</p>

          <div className="stack-list spaced">
            {t.techSection.stacks.map((stack) => (
              <span key={stack} className="chip">
                {stack}
              </span>
            ))}
          </div>

          <div className="card-grid two">
            {t.techSection.advantages.map((adv) => (
              <article key={adv.title} className="info-card glass">
                <h3>{adv.title}</h3>
                <p>{adv.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="faq" className="section faq-section">
          <p className="eyebrow">{t.faqSection.badge}</p>
          <h2>{t.faqSection.title}</h2>

          <div className="faq-list compact-grid">
            {t.faqSection.items.map((item) => (
              <details key={item.q} className="faq-item glass" open={false}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="section cta">
          <h2>{t.cta.title}</h2>
          <p>{t.cta.subtitle}</p>
          <div className="hero-actions center">
            <a className="main-btn" href={RELEASE_LATEST_URL} target="_blank" rel="noreferrer">
              {t.cta.primary}
            </a>
            <a className="sub-btn" href={REPO_URL} target="_blank" rel="noreferrer">
              {t.cta.secondary}
            </a>
          </div>
        </section>
      </main>

      {isImageZoomOpen && (
        <div className="image-zoom-overlay" onClick={() => setIsImageZoomOpen(false)}>
          <button
            className="image-zoom-close"
            aria-label={locale === "zh" ? "关闭预览" : "Close preview"}
            onClick={() => setIsImageZoomOpen(false)}
          >
            ×
          </button>
          <img
            className="image-zoom-view"
            src={slideImages[slideIndex]}
            alt={activeSlide.title}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}

      <footer className="footer split-footer">
        <p>{t.footer.copyright}</p>
        <p>
          <a href={REPO_URL} target="_blank" rel="noreferrer">{t.footer.project}</a>
          <span> · </span>
          <a href={HOME_URL} target="_blank" rel="noreferrer">{t.footer.home}</a>
          <span> · </span>
          <a href={NAV_URL} target="_blank" rel="noreferrer">{t.footer.nav}</a>
        </p>
      </footer>
    </div>
  );
}

function Icon({ kind }: { kind: string }) {
  switch (kind) {
    case "rocket":
      return <svg width="20" height="20" viewBox="0 0 24 24"><path d="M5 19l4-1 10-10a5 5 0 0 0-7-7L2 11l-1 4 4 4Z"/><path d="M10 14l-4 4"/></svg>;
    case "pulse":
      return <svg width="20" height="20" viewBox="0 0 24 24"><path d="M3 12h4l2-4 4 8 2-4h6"/></svg>;
    case "languages":
      return <svg width="20" height="20" viewBox="0 0 24 24"><path d="M3 6h8"/><path d="M7 4v2a8 8 0 0 1-4 7"/><path d="M5 11l4 5"/><path d="M14 6h7"/><path d="M17 6v12"/><path d="M14 14h6"/></svg>;
    case "users":
      return <svg width="20" height="20" viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><path d="M3 19a6 6 0 0 1 12 0"/><circle cx="18" cy="9" r="2"/><path d="M15 19a5 5 0 0 1 6 0"/></svg>;
    case "gauge":
      return <svg width="20" height="20" viewBox="0 0 24 24"><path d="M4 14a8 8 0 1 1 16 0"/><path d="M12 14l4-4"/></svg>;
    case "shield":
      return <svg width="20" height="20" viewBox="0 0 24 24"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3Z"/><path d="m9 12 2 2 4-4"/></svg>;
    case "tool":
      return <svg width="20" height="20" viewBox="0 0 24 24"><path d="M14 7l3-3 3 3-3 3"/><path d="M4 20l8-8"/><path d="M7 7l10 10"/></svg>;
    case "sparkles":
      return <svg width="20" height="20" viewBox="0 0 24 24"><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3Z"/><path d="M5 17l.8 2.2L8 20l-2.2.8L5 23l-.8-2.2L2 20l2.2-.8L5 17Z"/></svg>;
    case "settings":
      return <svg width="20" height="20" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1 1 0 0 0 .2 1.1l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1 1 0 0 0-1.1-.2 1 1 0 0 0-.6.9V20a2 2 0 1 1-4 0v-.2a1 1 0 0 0-.6-.9 1 1 0 0 0-1.1.2l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1 1 0 0 0 .2-1.1 1 1 0 0 0-.9-.6H4a2 2 0 1 1 0-4h.2a1 1 0 0 0 .9-.6 1 1 0 0 0-.2-1.1l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1 1 0 0 0 1.1.2 1 1 0 0 0 .6-.9V4a2 2 0 1 1 4 0v.2a1 1 0 0 0 .6.9 1 1 0 0 0 1.1-.2l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1 1 0 0 0-.2 1.1 1 1 0 0 0 .9.6h.2a2 2 0 1 1 0 4h-.2a1 1 0 0 0-.9.6Z"/></svg>;
    case "desktop":
      return <svg width="20" height="20" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8"/><path d="M12 16v4"/></svg>;
    default:
      return <svg width="20" height="20" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/></svg>;
  }
}

export default App;
