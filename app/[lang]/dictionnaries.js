const dictionaries = {
  mainpage: {
    en: () =>
      import("/dictionaries/mainpage/mainpage.en.json").then(
        (module) => module.default
      ),
    fr: () =>
      import("/dictionaries/mainpage/mainpage.fr.json").then(
        (module) => module.default
      ),
  },
  yeahcastle: {
    en: () =>
      import("/dictionaries/yeahcastle/yeahcastle.en.json").then(
        (module) => module.default
      ),
    fr: () =>
      import("/dictionaries/yeahcastle/yeahcastle.fr.json").then(
        (module) => module.default
      ),
  },
  minancyrealm: {
    en: () =>
      import("/dictionaries/minancyrealm/minancyrealm.en.json").then(
        (module) => module.default
      ),
    fr: () =>
      import("/dictionaries/minancyrealm/minancyrealm.fr.json").then(
        (module) => module.default
      ),
  },
  polygonio: {
    en: () =>
      import("/dictionaries/polygonio/polygonio.en.json").then(
        (module) => module.default
      ),
    fr: () =>
      import("/dictionaries/polygonio/polygonio.fr.json").then(
        (module) => module.default
      ),
  },
  log8235: {
    en: () =>
      import("/dictionaries/log8235/log8235.en.json").then(
        (module) => module.default
      ),
    fr: () =>
      import("/dictionaries/log8235/log8235.fr.json").then(
        (module) => module.default
      ),
  },
  mobileproject: {
    en: () =>
      import("/dictionaries/mobileproject/mobileproject.en.json").then(
        (module) => module.default
      ),
    fr: () =>
      import("/dictionaries/mobileproject/mobileproject.fr.json").then(
        (module) => module.default
      ),
  },
  navbar: {
    en: () =>
      import("/dictionaries/navbar/navbar.en.json").then(
        (module) => module.default
      ),
    fr: () =>
      import("/dictionaries/navbar/navbar.fr.json").then(
        (module) => module.default
      ),
  },
  footer: {
    en: () =>
      import("/dictionaries/footer/footer.en.json").then(
        (module) => module.default
      ),
    fr: () =>
      import("/dictionaries/footer/footer.fr.json").then(
        (module) => module.default
      ),
  },
};

export const getDictionary = async (page, locale) =>
  dictionaries[page][locale]();
