import { useEffect, useMemo, useState } from "react";
import { Locale, content } from "./content";

const REPO_URL = "https://github.com/lengziyu/Envra";
const RELEASES_URL = "https://github.com/lengziyu/Envra/releases";
const RELEASE_LATEST_URL = "https://github.com/lengziyu/Envra/releases/latest";
const README_ZH = "https://github.com/lengziyu/Envra/blob/main/README.zh-CN.md";
const README_EN = "https://github.com/lengziyu/Envra/blob/main/README.md";

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

  const t = useMemo(() => content[locale], [locale]);
  const activeSlide = t.screenshotSection.slides[slideIndex];

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
    }, 5000);
    return () => window.clearInterval(timer);
  }, [t.screenshotSection.slides.length]);

  const switchLocale = () => setLocale((prev) => (prev === "zh" ? "en" : "zh"));
  const switchTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));
  const showPrevSlide = () =>
    setSlideIndex((prev) =>
      prev === 0 ? t.screenshotSection.slides.length - 1 : prev - 1
    );
  const showNextSlide = () =>
    setSlideIndex((prev) => (prev + 1) % t.screenshotSection.slides.length);

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
          <a href="#features">{t.nav.features}</a>
          <a href="#screenshots">{t.nav.screenshots}</a>
          <a href="#download">{t.nav.download}</a>
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
          <div>
            <p className="eyebrow">{t.hero.badge}</p>
            <h1>{t.hero.title}</h1>
            <p className="subtitle">{t.hero.subtitle}</p>
            <div className="hero-actions">
              <a className="main-btn" href="#download">
                {t.hero.primary}
              </a>
              <a className="sub-btn" href={RELEASES_URL} target="_blank" rel="noreferrer">
                {t.hero.secondary}
              </a>
            </div>
            <p className="hero-note">{t.hero.note}</p>
          </div>

          <aside className="hero-panel glass">
            <p className="panel-title">Envra v0.1.5</p>
            <p className="panel-subtitle">Tauri 2 + React 19</p>
            <ul className="status-list">
              <li>
                <span className="dot good" />
                <span>Dashboard + Doctor + Tools + Init + Settings</span>
              </li>
              <li>
                <span className="dot good" />
                <span>zh / en bilingual UI</span>
              </li>
              <li>
                <span className="dot warn" />
                <span>{t.downloadSection.versionLabel}: {t.downloadSection.versionValue}</span>
              </li>
            </ul>
          </aside>
        </section>

        <section className="section stats">
          {t.highlights.map((item) => (
            <article key={item.label} className="stat-card glass">
              <p>{item.label}</p>
              <strong>{item.value}</strong>
            </article>
          ))}
        </section>

        <section id="features" className="section">
          <p className="eyebrow">{t.featureSection.badge}</p>
          <h2>{t.featureSection.title}</h2>
          <div className="card-grid three">
            {t.featureSection.cards.map((card) => (
              <article key={card.title} className="info-card glass">
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="screenshots" className="section">
          <p className="eyebrow">{t.screenshotSection.badge}</p>
          <h2>{t.screenshotSection.title}</h2>
          <p className="subtitle">{t.screenshotSection.subtitle}</p>

          <div className="carousel glass">
            <div className="carousel-copy">
              <h3>{activeSlide.title}</h3>
              <p>{activeSlide.caption}</p>
              <div className="tag-list">
                {activeSlide.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
              <ul>
                {activeSlide.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>

            <div className="carousel-preview" aria-hidden="true">
              <div className="preview-top">
                <span />
                <span />
                <span />
              </div>
              <div className="preview-main">
                <div className="preview-title" />
                <div className="preview-row" />
                <div className="preview-row" />
                <div className="preview-row short" />
                <div className="preview-grid">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-controls">
            <button className="ghost-btn" onClick={showPrevSlide}>
              {t.screenshotSection.previous}
            </button>
            <div className="pager">
              {t.screenshotSection.slides.map((slide, index) => (
                <button
                  key={slide.title}
                  className={index === slideIndex ? "pager-dot active" : "pager-dot"}
                  onClick={() => setSlideIndex(index)}
                  aria-label={slide.title}
                />
              ))}
            </div>
            <button className="ghost-btn" onClick={showNextSlide}>
              {t.screenshotSection.next}
            </button>
          </div>
        </section>

        <section id="download" className="section">
          <p className="eyebrow">{t.downloadSection.badge}</p>
          <h2>{t.downloadSection.title}</h2>
          <p className="subtitle">{t.downloadSection.subtitle}</p>
          <p className="version-chip">
            {t.downloadSection.versionLabel}: <strong>{t.downloadSection.versionValue}</strong>
          </p>

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
            <article className="info-card glass">
              <h3>{t.downloadSection.extras[0].title}</h3>
              <p>{t.downloadSection.extras[0].desc}</p>
              <a className="sub-btn" href={RELEASES_URL} target="_blank" rel="noreferrer">
                {t.downloadSection.extras[0].action}
              </a>
            </article>
            <article className="info-card glass">
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

        <section className="section">
          <p className="eyebrow">{t.releaseSection.badge}</p>
          <h2>{t.releaseSection.title}</h2>
          <p className="subtitle">{t.releaseSection.subtitle}</p>

          <div className="release-list">
            {t.releaseSection.items.map((item) => (
              <article key={item.version} className="release-item glass">
                <p className="release-head">
                  <span>{item.version}</span>
                  <span>{item.date}</span>
                </p>
                <p>{item.summary}</p>
                <span className="release-tag">{t.releaseSection.latestLabel}</span>
              </article>
            ))}
          </div>

          <a className="sub-btn release-link" href={RELEASES_URL} target="_blank" rel="noreferrer">
            {t.releaseSection.action}
          </a>
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

        <section id="faq" className="section">
          <p className="eyebrow">{t.faqSection.badge}</p>
          <h2>{t.faqSection.title}</h2>

          <div className="faq-list">
            {t.faqSection.items.map((item) => (
              <details key={item.q} className="faq-item glass">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="section cta glass">
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

      <footer className="footer">
        <p>{t.footer}</p>
      </footer>
    </div>
  );
}

export default App;
