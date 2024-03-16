import "./log8235.css";

export default function Log8235() {
  return (
    <div className="all-box">
      <div id="headerwrap">
        <h1>Agents intelligents pour jeux vidéos</h1>
      </div>

      <section id="works"></section>

      <div className="category-row">
        <b> Introduction </b>
      </div>

      <div className="full-text">
        <p>
          Le cours &quot;LOG8235 - Agents intelligents pour jeux vidéo&quot; est
          disponible à Polytechnique Montréal dans le département de génie
          logiciel et informatique. Il a été intiallement conçu par Ubisoft et
          s&apos;oriente autour d&apos;Unreal Engine 5. Aujourd&apos;hui, le
          cours est dispensé par différents professionnels de l&apos;industrie
          du jeu vidéo.
        </p>
        <p>
          Ce cours se concentre sur l&apos;implémentation d&apos;IA dans les
          jeux vidéos, en passant par les différentes thématiques qui entourent
          ce sujet comme l&apos;animation, la physique, la navigation, la
          décision etc...
        </p>
        <p>
          Ci-dessous se trouvent les différents travaux produits en TP dans ce
          cours.
        </p>
      </div>

      <div className="mid-zone zone-black mgt">
        <div className="mid-zone-line">
          <div className="mid-zone-text mgl">
            <p className="mid-zone-text-title">
              <b>TP1 : Déplacement par la physique</b>
            </p>
            <p className="mid-zone-text-text">
              Ce TP avait pour but de se familiariser avec le déplacement
              d&apos;agents à l&apos;aide de la physique (Raycast, forces,
              etc...). Ce dernier devait se déplacer dans la scène, éviter les
              pièges, rejoindre des collectibles pour gagner un boost et
              attraper/fuir l&apos;agent selon son état.
            </p>
          </div>
          <div className="mid-zone-img mgr pdt">
            <img src="/gifs/tp1-question3.gif" alt="tp1-q3" className=" gif" />
          </div>
        </div>

        <div className="mid-zone-line">
          <div className="mid-zone-img mgl">
            <img src="/gifs/tp1-question4.gif" alt="tp1-q4" className="gif" />
          </div>
          <div className="mid-zone-text mgr mgl">
            <p className="mid-zone-text-text">
              A l&apos;aide de Raycast, on peut récupérer la position des murs
              ainsi que leur vecteur normal. Cela permet de déterminer la
              direction dans laquelle l&apos;agent doit se déplacer pour éviter
              les obstacles par produit vectoriel entre la normale et le up
              vector de l&apos;agent.
            </p>
          </div>
        </div>

        <div className="mid-zone-line mgb">
          <div className="mid-zone-text mgl">
            <p className="mid-zone-text-text">
              L&apos;agent peut détecter le joueur à l&apos;aide d&apos;un
              SphereOverlap. Si un rayon est tracé entre l&apos;agent et le
              joueur sans obstacles, il se dirige vers lui. Si le joueur attrape
              un collectible, l&apos;agent passe en comportement de fuite et
              cherche à s&apos;éloigner de lui.
            </p>
          </div>
          <div className="mid-zone-img mgr pdt">
            <img src="/gifs/tp1-question7.gif" alt="tp1-q7" className="gif" />
          </div>
        </div>
      </div>

      <div className="mid-zone zone-white pdt mgb">
        <div className="mid-zone-line">
          <div className="mid-zone-text mgl">
            <img src="/gifs/tp2-gif1.gif" alt="tp2-gif1" className="gif2" />
          </div>
          <div className="mid-zone-text mgr pdl">
            <p className="mid-zone-text-title">
              <b>TP2 : Déplacement par navmesh et animations</b>
            </p>
            <p className="mid-zone-text-text">
              Ce TP est similaire au premier, mais cette fois-ci, l&apos;agent
              doit se déplacer en utilisant une navmesh. Il doit également être
              capable de sauter par dessus les pièges en utilisant les navlinks
              à sa disposition. Enfin, il doit être capable de jouer des
              animations en fonction de son état.
            </p>
          </div>
        </div>
        <div className="mid-zone-line mgb">
          <div className="mid-zone-text mgl">
            <p className="mid-zone-text-text">
              L&apos;agent peut détecter le joueur à l&apos;aide d&apos;un
              SphereOverlap. Si un rayon est tracé entre l&apos;agent et le
              joueur sans obstacles, il se dirige vers lui. L&apos;agent
              utilise un LKP (Last Known Position) pour aller investiguer la
              dernière position connue du joueur s&apos;il ne le vois plus.
            </p>
          </div>
          <div className="mid-zone-img mgr pdt">
            <img src="/gifs/tp2-gif2.gif" alt="tp2-gif2" className="gif2" />
          </div>
        </div>
        <div className="mid-zone-line">
          <div className="mid-zone-text mgl">
            <img src="/gifs/tp2-gif3.gif" alt="tp2-gif3" className="gif2" />
          </div>
          <div className="mid-zone-text mgr mgl">
            <p className="mid-zone-text-text">
              L&apos;agent fuit le joueur si ce dernier attrape un collectible.
              Il s&apos;enfuit vers une des positions de fuite prédéfinies dans
              la scène.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
