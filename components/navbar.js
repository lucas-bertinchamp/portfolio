"use client";
import "./navbar.css";

export default function Navbar({ params: { lang } }) {
  let nextLang = lang === "en" ? "fr" : "en";
  let nextLangText = lang === "en" ? "Passer en Français" : "Switch to English";

  let nextLangPath = window.location.pathname.replace(lang, nextLang);

  let homeText = lang === "en" ? "Home" : "Accueil";
  let projectsText = lang === "en" ? "Projects" : "Projets";
  let aboutText = lang === "en" ? "About" : "À propos";

  return (
    <div className="navbar-perso">
      <div className="navbar-items">
        <div className="left-items">
          <a className="navbar-item" href={nextLangPath}>
            {nextLangText}
          </a>
        </div>
        <div className="right-items">
          <a className="navbar-item" href={"/" + lang + "#"}>
            {homeText}
          </a>
          <a className="navbar-item" href={"/" + lang + "#works"}>
            {projectsText}
          </a>
          <a className="navbar-item">{aboutText}</a>
        </div>
      </div>
    </div>
  );
}
