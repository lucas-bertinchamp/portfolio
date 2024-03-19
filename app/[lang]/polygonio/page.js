import { getDictionary } from "../dictionnaries";
import "./polygonio.css";

export default async function Polygonio({ params: { lang } }) {
  const dictionary = await getDictionary("polygonio", lang);
  return (
    <div className="all-box">
      <div id="headerwrap">
        <h1>{dictionary.title}</h1>
      </div>

      <section id="works"></section>

      <div className="category-row">
        <b> {dictionary.rowCategories[0]} </b>
      </div>

      <div className="full-text">
        <p>{dictionary.textParagraphs[0]}</p>
        <p>
          {dictionary.textParagraphs[1]}
          <a href="https://agar.io">&quot;Agar.io&quot;</a>.
        </p>
        <p>{dictionary.textParagraphs[2]}</p>
        <p>
          {dictionary.textParagraphs[3]}
          <a href="https://github.com/lucas-bertinchamp/polygon.io">GitHub</a>.
          {dictionary.textParagraphs[4]}
        </p>
      </div>

      <div className="mid-zone zone-black mgt">
        <div className="mid-zone-text mgl">
          <p className="mid-zone-text-title">
            <b>{dictionary.midRows[0].title}</b>
          </p>
          <p className="mid-zone-text-text">{dictionary.midRows[0].content}</p>
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
        <div className="mid-zone-img mgl">
          <img src="/img/pixijs.png" alt="Pixijs" className="mid-img" />
        </div>
        <div className="mid-zone-text mgr pdl">
          <p className="mid-zone-text-title">
            <b>{dictionary.midRows[1].title}</b>
          </p>
          <p className="mid-zone-text-text">{dictionary.midRows[1].content}</p>
        </div>
      </div>

      <div className="mid-zone zone-black">
        <div className="mid-zone-text mgl">
          <p className="mid-zone-text-title">
            <b>{dictionary.midRows[2].title}</b>
          </p>
          <p className="mid-zone-text-text">{dictionary.midRows[2].content}</p>
        </div>
        <div className="mid-zone-img mgr">
          <img src="/img/redis_logo.png" alt="Redis" className="mid-img" />
        </div>
      </div>

      <div className="category-row">
        <b>{dictionary.rowCategories[1]}</b>
      </div>

      <iframe
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/QcttU8N8G1E?si=O8fijSWMZdm5OSEE"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        className="video"
      ></iframe>
    </div>
  );
}
