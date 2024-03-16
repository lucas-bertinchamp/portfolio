import "./polygonio.css";

export default function Polygonio() {
  return (
    <div className="all-box">
      <div id="headerwrap">
        <h1>Polygon.io</h1>
      </div>

      <section id="works"></section>

      <div className="category-row">
        <b> Introduction </b>
      </div>

      <div className="full-text">
        <p>
          Polygon.io est un jeu web réalisé dans le cadre du cours
          &quot;Advanced Software Engineering&quot; à l'École des Mines de
          Nancy.
        </p>
        <p>
          Le but de ce projet était de réaliser une application web utilisant
          des api. Nous avons choisi de réaliser un jeu web, multi-joueurs,
          s'inspirant du style du jeu{" "}
          <a href="https://agar.io">&quot;Agar.io&quot;</a>.
        </p>
        <p>
          Dans ce jeu, les joueurs incarnent des polygones et doivent abattre
          les autres joueurs pour gagner de l'expérience et évoluer en un
          polygone plus grand. (Un polygone à n cotés peut tirer n projectiles.)
          Les joueurs peuvent également collecter des bulles d'expérience sur la
          map ou des bulles de vie pour se soigner. Une jauge représentant le
          nombre de balles dans leur chargeur est également présente. Enfin, un
          classement des joueurs, une minimap ainsi qu'un chat textuel sont
          affiché en temps réel.
        </p>
        <p>
          Le code source de ce projet est disponible sur{" "}
          <a href="https://github.com/lucas-bertinchamp/polygon.io"> GitHub</a>.
          Le jeu n'est plus déployé pour ne pas engendrer de coûts
          d'hébergement.
        </p>
      </div>

      <div className="mid-zone zone-black mgt">
        <div className="mid-zone-text mgl">
          <p className="mid-zone-text-title">
            <b>Utilisation de Nextjs</b>
          </p>
          <p className="mid-zone-text-text">
            Next.js est un framework JavaScript open-source qui permet de
            réaliser des applications web côté serveur et côté client. Le
            serveur est en Node.js et le client en React.
          </p>
        </div>
        <div className="mid-zone-img mgr">
          <img
            src="/img/nextjs-logo.png"
            alt="Nextjs"
            className="nextjs-logo"
          />
        </div>
      </div>

      <div className="mid-zone zone-white">
        <div className="mid-zone-text mgl">
          <img src="/img/pixijs.png" alt="Pixijs" className="mid-img" />
        </div>
        <div className="mid-zone-text mgr pdl">
          <p className="mid-zone-text-title">
            <b>Éléments graphique</b>
          </p>
          <p className="mid-zone-text-text">
            Pixi.js est une librairie JavaScript qui permet de réaliser des
            rendus 2D rapides et fluides. Nous l'avons utilisé pour toute la
            partie graphique du jeu et notamment l'interface utilisateur, les
            polygones, les balles et les bulles.
          </p>
        </div>
      </div>

      <div className="mid-zone zone-black">
        <div className="mid-zone-text mgl">
          <p className="mid-zone-text-title">
            <b>Base de données Redis</b>
          </p>
          <p className="mid-zone-text-text">
            Nous avons utilisé Redis pour stocker les données des joueurs
            (position, expérience ...) mais aussi les emplacements des balles et
            bulles sur le terrain. Redis permet un acces aux données en quelques
            microsecondes ce qui est parfait pour un jeu temps-réel.
          </p>
        </div>
        <div className="mid-zone-img mgr">
          <img src="/img/redis_logo.png" alt="Redis" className="mid-img" />
        </div>
      </div>

      <div className="category-row">
        <b>Gameplay</b>
      </div>

      <iframe
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/QcttU8N8G1E?si=O8fijSWMZdm5OSEE"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        className="mgb"
      ></iframe>
    </div>
  );
}
