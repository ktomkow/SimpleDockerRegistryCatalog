import LocalizedStrings from "react-localization";

const strings = new LocalizedStrings({
  en: {
    HOME: {
      HELLO: "Hello, World!",
    },
  },
  pl: {
    HOME: {
      HELLO: "Witaj, Świecie!",
    },
  },
});

export default strings;
