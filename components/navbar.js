import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbar-perso">
      <div className="navbar-items">
        <a className="navbar-item" href="/#">
          Accueil
        </a>
        <a className="navbar-item" href="/#works">
          Projets
        </a>
        <a className="navbar-item">À propos</a>
      </div>
    </div>
  );
}
