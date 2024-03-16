import "./mobileproject.css";

export default function MobileProject() {
  return (
    <div className="all-box">
      <div id="headerwrap">
        <h1>Projet Mobile</h1>
      </div>

      <section id="works"></section>

      <div className="category-row">
        <b> Présentation </b>
      </div>

      <div className="full-text">
        <p>
          Projet Mobile <i>*nom encore a définir*</i> est mon premier projet de
          jeu vidéo dans un cadre non académique et développé sur Unity.
        </p>
        <p>
          Le joueur incarne un petit personnage atterit mystérieusement dans un
          donjon et doit s&apos;échapper. S&apos;aventurant de salle en salle, il devra
          éviter les pièges qui se dressent sur son chemin, combattre des
          ennemis et fera des rencontres inattendues.
        </p>
        <p>
          Ce jeu est développé entièrement en solo depuis fin Janvier 2024. Il
          me permet de mettre en pratique les compétences acquises lors de mes
          études et d&apos;approfondir mes connaissances sur le logiciel Unity. A
          terme, je souhaiterais le publier sur l&apos;App Store et le Play Store.
          L&apos;intégralité des assets graphiques du jeu sont issus du travail de{" "}
          <a href="https://krishna-palacio.itch.io">Krishna Palacio</a> qui se
          spécialise dans la création d&apos;assets 8 bits.
        </p>
      </div>

      <div className="mid-zone zone-black mgt">
        <div className="mid-zone-line">
          <div className="mid-zone-text mgl">
            <p className="mid-zone-text-title">
              <b>Un donjon aux multiples dangers</b>
            </p>
            <p className="mid-zone-text-text">
              Remplis de pièges et d&apos;ennemis, le donjon est un endroit dangereux
              où le joueur devra faire preuve d&apos;attention pour progresser.{" "}
              <br /> <br />
              Avec seulement 2 points de vie et une attaque à courte portée en
              début de partie , il faudra visiter encore et encore les salles
              jusqu&apos;à en mémoriser les moindres détails.
            </p>
          </div>
          <div className="mid-zone-img mgr pdt">
            <img src="/gifs-unity/unity-traps.gif" className=" gif" />
          </div>
        </div>

        <div className="mid-zone-line zone-white">
          <div className="mid-zone-img mgl">
            <img src="/gifs-unity/unity-enemy.gif" className="gif" />
          </div>
          <div className="mid-zone-text mgr mgl">
            <p className="mid-zone-text-title">
              <b>Des ennemis à affronter</b>
            </p>
            <p className="mid-zone-text-text">
              Nombre d&apos;ennemis peuplent le donjon. Plus ou moins puissants, ils
              sont tous prêts à en découdre avec le joueur. <br /> <br />
              Le joueur n&apos;aura pas d&apos;autre choix que de les défaire pour avancer
              !
            </p>
          </div>
        </div>

        <div className="mid-zone-line mgb">
          <div className="mid-zone-text mgl">
            <p className="mid-zone-text-title">
              <b>Des monstres intelligents</b>
            </p>
            <p className="mid-zone-text-text">
              En groupe, les ennemis peuvent se montrer redoutables. Ils se
              coordonnent pour attaquer le joueur et le forcer à se déplacer.{" "}
              <br /> <br />
              Basé sur un système de steering, les ennemis sont capables de se
              déplacer en considérant les obstacles environnants. Une fois le
              joueur en dehors de la zone de danger, ils retournent à leur
              position initiale.
            </p>
          </div>
          <div className="mid-zone-img mgr pdt">
            <img src="/gifs-unity/unity-agents.gif" className="gif-petit" />
          </div>
        </div>

        <div className="mid-zone-line zone-white">
          <div className="mid-zone-img mgl">
            <img src="/gifs-unity/unity-shop.gif" className="gif" />
          </div>
          <div className="mid-zone-text mgr pdl">
            <p className="mid-zone-text-title">
              <b>Un système d&apos;inventaire, de boutique, de dialogue</b>
            </p>
            <p className="mid-zone-text-text">
              Tout RPG se doit de posséder un système d&apos;inventaire. Le joueur
              récupère des objets et de l&apos;argent en explorant le donjon. Items
              qu&apos;il pourra échanger contre des objets précieux <br /> <br />
              Basé sur les scriptable objects d&apos;Unity, le système d&apos;inventaire a
              été développé pour être facilement extensible. Créer de nouveaux
              items se fait en quelques clics. Les dialogues sont également
              gérés par ce procédé.
            </p>
          </div>
        </div>

        <div className="final-box">
          <p>Et bien plus encore à découvrir bientôt !</p>
        </div>
      </div>
    </div>
  );
}
