import "./yeahcastle.css";

export default function YeahCastle() {
  return (
    <div className="all-box">
      <div id="headerwrap">
        <h1>Yeah Castle</h1>
      </div>

      <section id="works"></section>

      <div className="category-row">
        <b> Présentation </b>
      </div>

      <div className="full-text">
        <p>
          Yeah Castle est un projet né du travail collaboratif entre étudiants
          d&apos;école d&apos;ingénieur et d&apos;école d&apos;art et de design
          (Campus Artem, Nancy, France) dans le cadre du cours &quot;Techniques
          de l&apos;animation et du jeu vidéo&quot;.
        </p>
        <p>
          Par équipe de 4, ce projet consistait à réaliser un jeu vidéo jouable
          sur borne d&apos;arcade pour être exposé lors du festival &quot;YEAH
          !&quot; à Lourmarin (France). Il fallait que les jeux produits soient
          court et avec un aspect competitif pour pousser les joueurs à y
          rejouer.
        </p>
        <p>
          Ce jeu est de type &quot;Mario Like&quot; et est réalisé sur Unity
          (1ère experience avec ce moteur de jeu). Le joueur incarne un ours,
          personnage emblémique du festival, qui doit atteindre la fin du niveau
          pour affronter le boss (1 des 3 organisateurs du festival). Sur son
          chemin, se dresse des ennemis qu&apos;il doit éviter ou éliminer tout
          en se déplaçant de plateforme en plateforme et en ramassant des
          power-ups et autres objets de score.
        </p>
      </div>

      <div className="bottom-zone">
        <div className="category-row white-text">
          <b>Gameplay</b>
        </div>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/76xvqaFfxek?si=5hwSxFo3qSFHPEsm"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          className="video"
        ></iframe>

        <div className="school-projects">
          <div className="grid"></div>
        </div>
      </div>
    </div>
  );
}
