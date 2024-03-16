import "./mainPage.css";
import ProjectComponent from "@/components/project";

import "@fortawesome/fontawesome-svg-core/styles.css";

export default function Home() {
  return (
    <div className="all-box">
      <div id="headerwrap">
        <h1>LUCAS BERTINCHAMP</h1>
        <h4>ÉTUDIANT POLYTECHNIQUE MONTREAL x MINES NANCY </h4>
      </div>

      <section id="works"></section>

      <div className="category-row">
        <b>Projets personnels</b>
      </div>

      <div className="personal-projects">
        <ProjectComponent
          params={{
            title: "Nom à définir",
            image: "/img/portfolio/unity.png",
            description: "Jeu mobile en cours de développement sur Unity.",
            link: "/mobileproject",
          }}
        />
      </div>

      <div className="category-row">
        <b>Projets académiques</b>
      </div>

      <div className="school-projects">
        <div className="grid">
          <ProjectComponent
            params={{
              title: "Cours PolyMtl - LOG8235",
              image: "/img/portfolio/unrealCours.png",
              description:
                "Travaux en lien avec le cours 'Agents intelligents pour jeux vidéo' à Polytechnique Montréal. Cours donnés sur Unreal Engine 5 et mis en place par Ubisoft.",
              link: "/log8235",
            }}
          />
          <ProjectComponent
            params={{
              title: "Polygon.io",
              image: "/img/portfolio/polygonio.png",
              description:
                "Jeu web réalisé pour le cours 'Advanced Software Engineering' à Mines Nancy.",
              link: "/polygonio",
            }}
          />
          <ProjectComponent
            params={{
              title: "Yeah Castle",
              image: "/img/portfolio/yeahCastle.png",
              description:
                "Jeu pour borne d'arcade réalisé sur Unity pour le cours 'Techniques de l'animation et du jeu vidéo' à Mines Nancy.",
              link: "/yeahcastle",
            }}
          />
          <ProjectComponent
            params={{
              title: "Minancy Realm",
              image: "/img/portfolio/minancyRealm.png",
              description:
                "Jeu réalisé sur RPGMaker pour le cours 'Jeu vidéo et culture geek' à Mines Nancy.",
              link: "/minancyrealm",
            }}
          />
        </div>
      </div>
    </div>
  );
}
