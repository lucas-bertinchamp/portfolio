import "./log8235.css";
import { getDictionary } from "../dictionnaries";

export default async function Log8235({ params: { lang } }) {
  const dictionary = await getDictionary("log8235", lang);
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
        <p>{dictionary.textParagraphs[1]}</p>
        <p>{dictionary.textParagraphs[2]}</p>
      </div>

      <div className="mid-zone zone-black mgt">
        <div className="mid-zone-line img-right">
          <div className="mid-zone-text mgl">
            <p className="mid-zone-text-title">
              <b>{dictionary.midRows[0].title}</b>
            </p>
            <p className="mid-zone-text-text">
              {dictionary.midRows[0].content[0]}
            </p>
          </div>
          <div className="mid-zone-img mgr pdt">
            <img src="/gifs/tp1-question3.gif" alt="tp1-q3" className="gif" />
          </div>
        </div>

        <div className="mid-zone-line img-left">
          <div className="mid-zone-img mgl">
            <img src="/gifs/tp1-question4.gif" alt="tp1-q4" className="gif" />
          </div>
          <div className="mid-zone-text mgr mgl">
            <p className="mid-zone-text-text">
              {dictionary.midRows[0].content[1]}
            </p>
          </div>
        </div>

        <div className="mid-zone-line img-right mgb">
          <div className="mid-zone-text mgl">
            <p className="mid-zone-text-text">
              {dictionary.midRows[0].content[2]}
            </p>
          </div>
          <div className="mid-zone-img mgr pdt">
            <img src="/gifs/tp1-question7.gif" alt="tp1-q7" className="gif" />
          </div>
        </div>
      </div>

      <div className="mid-zone zone-white pdt mgb">
        <div className="mid-zone-line img-left">
          <div className="mid-zone-img mgl">
            <img src="/gifs/tp2-gif1.gif" alt="tp2-gif1" className="gif" />
          </div>
          <div className="mid-zone-text mgr pdl">
            <p className="mid-zone-text-title">
              <b>{dictionary.midRows[1].title}</b>
            </p>
            <p className="mid-zone-text-text">
              {dictionary.midRows[1].content[0]}
            </p>
          </div>
        </div>
        <div className="mid-zone-line img-right mgb">
          <div className="mid-zone-text mgl">
            <p className="mid-zone-text-text">
              {dictionary.midRows[1].content[1]}
            </p>
          </div>
          <div className="mid-zone-img mgr pdt">
            <img src="/gifs/tp2-gif2.gif" alt="tp2-gif2" className="gif" />
          </div>
        </div>
        <div className="mid-zone-line img-left">
          <div className="mid-zone-img mgl">
            <img src="/gifs/tp2-gif3.gif" alt="tp2-gif3" className="gif" />
          </div>
          <div className="mid-zone-text mgr mgl">
            <p className="mid-zone-text-text">
              {dictionary.midRows[1].content[2]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
