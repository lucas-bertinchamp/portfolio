import "./minancyrealm.css";

export default function MinancyRealm() {
  return (
    <div className="all-box">
      <div id="headerwrap">
        <h1>MINANCY REALM</h1>
      </div>

      <section id="works"></section>

      <div className="category-row">
        <b> Introduction </b>
      </div>

      <div className="full-text">
        <p>
          Minancy Realm est un projet qui a été réalisé en 2 semaines dans le
          cadre du cours "Jeux Vidéo et culture geek" de l'école des Mines de
          Nancy.
        </p>
        <p>
          Le projet consistait à présenter un domaine de la culture geek par un
          format original. Nous avons décidé de réaliser un jeu vidéo pour
          présenter le thème "Jeux de société".
        </p>
        <p>
          Ce jeu est un RPG réalisé sur RPG Maker MV dont je me suis entièrement
          occupé du développement. Le joueur incarne un jeune dans un village
          dans lequel les jeux de société prennent vie et attaquent les
          habitants suite à l'apprition d'un mysterieux personnage. A la fin de
          chaque combat, le joueur en apprend plus sur l'univers des jeux de
          société en récupérant les items des jeux vaincus.
        </p>
      </div>

      <div className="bottom-zone">
        <div className="category-row white-text">
          <b>Trailer</b>
        </div>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/8TFnOzOL7GM?si=moDzqIaFmCqKp-cv"
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
