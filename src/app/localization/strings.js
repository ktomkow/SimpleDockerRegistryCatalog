import LocalizedStrings from 'react-localization';

const strings = new LocalizedStrings({
  en: {
    HOME: {
      HELLO: 'Hello, World!',
    },
    ADDRESS: {
      SAVE: 'Save',
      CHECK_CONNECTION: 'Check connection',
    },
  },
  pl: {
    HOME: {
      HELLO: 'Witaj, Świecie!',
    },
    ADDRESS: {
      SAVE: 'Zapisz',
      CHECK_CONNECTION: 'Sprawdź połączenie',
    },
  },
});

export default strings;
