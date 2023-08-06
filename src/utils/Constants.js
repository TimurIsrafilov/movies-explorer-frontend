// const BASIC_URL = "http://localhost:3000";
const BASIC_HTTP_URL = "http://movies-explorer-itf.nomoredomains.monster";
const BASIC_HTTPS_URL = "https://movies-explorer-itf.nomoredomains.monster";
const BEATFILMSERVER_URL = "https://api.nomoreparties.co";

const SHORT_MOVIE = 40;
const LONG_MOVIE = 1000;

const DESKTOP_SCREEN = 1280;
const TABLET_SCREEN = 1024;
const MOBILE_SCREEN = 768;

const DESKTOP_FIRST_MOVIES_4X4 = 16;
const DESKTOP_FIRST_MOVIES_4X3 = 12;
const TABLET_FIRST_MOVIES = 8;
const MOBILE_FIRST_MOVIES = 5;

const DESKTOP_NEXT_MOVIES_4 = 4;
const DESKTOP_NEXT_MOVIES_3 = 3;
const TABLET_NEXT_MOVIES = 2;
const MOBILE_NEXT_MOVIES = 2;

const VALID_ERR_NAME = "Нужно ввести имя";
const VALID_ERR_EMAIL = "Невалидный email";
const VALID_ERR_PASS = "Нужно ввести пароль";
const VALID_ERR_SEARCH = "Нужно ввести ключевое слово";

const ERR_PAGE_NOT_FOUND = "страница не найдена";
const ERR_PAGE_404 = "404";

const REG_EX_EMAIL_CHECK = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const REG_EX_NAME_CHECK = /^[а-яА-ЯёЁa-zA-Z0-9\-\s]+$/i;

module.exports = {
  // BASIC_URL,
  BASIC_HTTP_URL,
  BASIC_HTTPS_URL,
  BEATFILMSERVER_URL,

  SHORT_MOVIE,
  LONG_MOVIE,

  DESKTOP_SCREEN,
  TABLET_SCREEN,
  MOBILE_SCREEN,

  DESKTOP_FIRST_MOVIES_4X4,
  DESKTOP_FIRST_MOVIES_4X3,
  TABLET_FIRST_MOVIES,
  MOBILE_FIRST_MOVIES,

  DESKTOP_NEXT_MOVIES_4,
  DESKTOP_NEXT_MOVIES_3,
  TABLET_NEXT_MOVIES,
  MOBILE_NEXT_MOVIES,

  VALID_ERR_NAME,
  VALID_ERR_EMAIL,
  VALID_ERR_PASS,
  VALID_ERR_SEARCH,

  ERR_PAGE_NOT_FOUND,
  ERR_PAGE_404,

  REG_EX_EMAIL_CHECK,
  REG_EX_NAME_CHECK,
};
