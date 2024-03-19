import "./minancyrealm.css";
import { getDictionary } from "../dictionnaries";

export default async function MinancyRealm({ params: { lang } }) {
  const dictionnary = await getDictionary("minancyrealm", lang);
  return (
    <div className="all-box">
      <div id="headerwrap">
        <h1>{dictionnary.title}</h1>
      </div>

      <section id="works"></section>

      <div className="category-row">
        <b> {dictionnary.rowCategories.one} </b>
      </div>

      <div className="full-text">
        <p>{dictionnary.textParagraphs.one}</p>
        <p>{dictionnary.textParagraphs.two}</p>
        <p>{dictionnary.textParagraphs.three}</p>
      </div>

      <div className="bottom-zone">
        <div className="category-row white-text">
          <b>{dictionnary.rowCategories.two}</b>
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
      </div>
    </div>
  );
}
