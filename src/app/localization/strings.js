import LocalizedStrings from 'react-localization';

const strings = new LocalizedStrings({
  en: {
    APP_NAME: 'DRS UI',
    NAVBAR: {
      ADDRESS: 'Connection',
      CATALOG: 'Catalog',
      HOME: 'home',
    },
    HOME: {
      HELLO: 'Hello, World!',
    },
    ADDRESS: {
      SAVE: 'Save',
      CHECK_CONNECTION: 'Check connection',
      PROXY_ADDRESS: 'Proxy address',
      REGISTRY_ADDRESS: 'Registry address',
    },
    CATALOG: {
      IMAGES_IN_REGISTER: 'Images on hub',
      TAGS_OF_IMAGE: 'Image tags',
    },
  },
  pl: {
    APP_NAME: 'DRS UI',
    NAVBAR: {
      ADDRESS: 'Połączenie',
      CATALOG: 'Katalog',
      HOME: 'home',
    },
    HOME: {
      HELLO: 'Witaj, Świecie!',
    },
    ADDRESS: {
      SAVE: 'Zapisz',
      CHECK_CONNECTION: 'Sprawdź połączenie',
      PROXY_ADDRESS: 'Adres proxy',
      REGISTRY_ADDRESS: 'Adres rejestru',
    },
    CATALOG: {
      IMAGES_IN_REGISTER: 'Obrazy w rejestrze',
      TAGS_OF_IMAGE: 'Tagi obrazu',
    },
  },
});

export default strings;
