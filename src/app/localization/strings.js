import LocalizedStrings from 'react-localization';

const strings = new LocalizedStrings({
  en: {
    HOME: {
      HELLO: 'Hello, World!',
    },
    ADDRESS: {
      SAVE: 'Save',
      CHECK_CONNECTION: 'Check connection',
      PROXY_ADDRESS: 'Proxy address',
      REGISTRY_ADDRESS: 'Registry address'
    },
  },
  pl: {
    HOME: {
      HELLO: 'Witaj, Świecie!',
    },
    ADDRESS: {
      SAVE: 'Zapisz',
      CHECK_CONNECTION: 'Sprawdź połączenie',
      PROXY_ADDRESS: 'Adres proxy',
      REGISTRY_ADDRESS: 'Adres rejestru'
    },
  },
});

export default strings;
