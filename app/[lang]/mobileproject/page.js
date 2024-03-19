import "./mobileproject.css";
import { getDictionary } from "../dictionnaries";

export default async function MobileProject({ params: { lang } }) {
  const dictionary = await getDictionary("mobileproject", lang);
  return (
    <div className="all-box">
      <div id="headerwrap">
        <h1> {dictionary.title} </h1>
      </div>

      <section id="works"></section>

      <div className="category-row">
        <b> {dictionary.rowCategories[0]} </b>
      </div>

      <div className="full-text">
        <p>{dictionary.textParagraphs[0]}</p>
        <p>{dictionary.textParagraphs[1]}</p>
        <p>
          {dictionary.textParagraphs[2]}{" "}
          <a href="https://krishna-palacio.itch.io">Krishna Palacio</a>
          {dictionary.textParagraphs[3]}
        </p>
      </div>

      <div className="mid-zone zone-black mgt">
        <div className="mid-zone-line">
          <div className="mid-zone-text mgl">
            <p className="mid-zone-text-title">
              <b>{dictionary.midRows[0].title}</b>
            </p>
            <p className="mid-zone-text-text">
              {dictionary.midRows[0].content[0]} <br /> <br />
              {dictionary.midRows[0].content[1]}
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
              <b>{dictionary.midRows[1].title}</b>
            </p>
            <p className="mid-zone-text-text">
              {dictionary.midRows[1].content[0]} <br /> <br />
              {dictionary.midRows[1].content[1]}
            </p>
          </div>
        </div>

        <div className="mid-zone-line mgb">
          <div className="mid-zone-text mgl">
            <p className="mid-zone-text-title">
              <b>{dictionary.midRows[2].title}</b>
            </p>
            <p className="mid-zone-text-text">
              {dictionary.midRows[2].content[0]}
              <br /> <br />
              {dictionary.midRows[2].content[1]}
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
              <b>{dictionary.midRows[3].title}</b>
            </p>
            <p className="mid-zone-text-text">
              {dictionary.midRows[3].content[0]} <br /> <br />
              {dictionary.midRows[3].content[1]}
            </p>
          </div>
        </div>

        <div className="final-box">
          <p>{dictionary.rowCategories[1]}</p>
        </div>
      </div>
    </div>
  );
}
