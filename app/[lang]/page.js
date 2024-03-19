import "./mainPage.css";
import ProjectComponent from "@/components/project";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { getDictionary } from "./dictionnaries";

export default async function Home({ params: { lang } }) {
  const dictionary = await getDictionary("mainpage", lang);
  return (
    <div className="all-box">
      <div id="headerwrap">
        <h1>{dictionary.title}</h1>
        <h4>{dictionary.subtitle}</h4>
      </div>

      <section id="works"></section>

      <div className="category-row">
        <b>{dictionary.rowCategories[0]}</b>
      </div>

      <div className="personal-projects">
        <ProjectComponent
          params={{
            title: dictionary.projects.mobileproject.title,
            image: "/img/portfolio/unity.png",
            description: dictionary.projects.mobileproject.description,
            link: "/" + lang + "/mobileproject",
          }}
        />
      </div>

      <div className="category-row">
        <b>{dictionary.rowCategories[1]}</b>
      </div>

      <div className="school-projects">
        <div className="grid">
          <ProjectComponent
            params={{
              title: dictionary.projects.log8235.title,
              image: "/img/portfolio/unrealCours.png",
              description: dictionary.projects.log8235.description,
              link: "/" + lang + "/log8235",
            }}
          />
          <ProjectComponent
            params={{
              title: dictionary.projects.polygonio.title,
              image: "/img/portfolio/polygonio.png",
              description: dictionary.projects.polygonio.description,
              link: "/" + lang + "/polygonio",
            }}
          />
          <ProjectComponent
            params={{
              title: dictionary.projects.yeahcastle.title,
              image: "/img/portfolio/yeahCastle.png",
              description: dictionary.projects.yeahcastle.description,
              link: "/" + lang + "/yeahcastle",
            }}
          />
          <ProjectComponent
            params={{
              title: dictionary.projects.minancyrealm.title,
              image: "/img/portfolio/minancyRealm.png",
              description: dictionary.projects.minancyrealm.description,
              link: "/" + lang + "/minancyrealm",
            }}
          />
        </div>
      </div>
    </div>
  );
}
