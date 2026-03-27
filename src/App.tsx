import { useEffect, useMemo, useState } from "react";
import { Locale, content } from "./content";

const REPO_URL = "https://github.com/lengziyu/Envra";
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

  const t = useMemo(() => content[locale], [locale]);

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
          <a href="#features">{t.nav.features}</a>
          <a href="#modules">{t.nav.modules}</a>
          <a href="#stack">{t.nav.stack}</a>
          <a href="#start">{t.nav.start}</a>
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
              <a className="main-btn" href={REPO_URL} target="_blank" rel="noreferrer">
                {t.hero.primary}
              </a>
              <a className="sub-btn" href="#features">
                {t.hero.secondary}
              </a>
            </div>
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
                <span>{t.stackSection.statusBody}</span>
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

        <section id="modules" className="section">
          <p className="eyebrow">{t.moduleSection.badge}</p>
          <h2>{t.moduleSection.title}</h2>
          <div className="card-grid two">
            {t.moduleSection.modules.map((module) => (
              <article key={module.name} className="module-card glass">
                <h3>{module.name}</h3>
                <p className="module-desc">{module.desc}</p>
                <ul>
                  {module.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <p className="eyebrow">{t.detailSection.badge}</p>
          <h2>{t.detailSection.title}</h2>
          <div className="card-grid three">
            <article className="info-card glass">
              <h3>{t.detailSection.doctorTitle}</h3>
              <ul>
                {t.detailSection.doctorItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="info-card glass">
              <h3>{t.detailSection.toolTitle}</h3>
              <ul>
                {t.detailSection.toolItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="info-card glass">
              <h3>{t.detailSection.initTitle}</h3>
              <ul>
                {t.detailSection.initItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section id="stack" className="section split">
          <div className="glass stack-card">
            <p className="eyebrow">{t.stackSection.badge}</p>
            <h2>{t.stackSection.title}</h2>
            <p className="subtitle small">{t.stackSection.subtitle}</p>
            <div className="stack-list">
              {t.stackSection.stacks.map((stack) => (
                <span key={stack} className="chip">
                  {stack}
                </span>
              ))}
            </div>
            <div className="status-note">
              <p className="status-label">{t.stackSection.statusTitle}</p>
              <p>{t.stackSection.statusBody}</p>
            </div>
          </div>

          <div id="start" className="glass command-card">
            <h3>{t.stackSection.commandsTitle}</h3>
            <div className="command-group">
              <p>{t.stackSection.devTitle}</p>
              <pre>
                <code>{t.stackSection.devCommand}</code>
              </pre>
            </div>
            <div className="command-group">
              <p>{t.stackSection.buildTitle}</p>
              <pre>
                <code>{t.stackSection.buildCommand}</code>
              </pre>
            </div>
            <div className="command-group">
              <p>{t.stackSection.releaseTitle}</p>
              <pre>
                <code>{t.stackSection.releaseCommand}</code>
              </pre>
            </div>
          </div>
        </section>

        <section className="section cta glass">
          <h2>{t.cta.title}</h2>
          <p>{t.cta.subtitle}</p>
          <div className="hero-actions center">
            <a className="main-btn" href={REPO_URL} target="_blank" rel="noreferrer">
              {t.cta.primary}
            </a>
            <a
              className="sub-btn"
              href={locale === "zh" ? README_ZH : README_EN}
              target="_blank"
              rel="noreferrer"
            >
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
