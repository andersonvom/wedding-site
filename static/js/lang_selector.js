var language = window.navigator.userLanguage || window.navigator.language;
var homepage = 'welcome';
var lang = 'en';
if (language.indexOf('en') == -1) {
  homepage = 'bem-vindo';
  lang = 'pt';
}
window.location = lang + '/' + homepage + '.html';
