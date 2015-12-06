var language = window.navigator.userLanguage || window.navigator.language;
var homepage = 'welcome';
if (language.indexOf('en') == -1) {
  homepage = 'bem-vindo';
}
window.location = homepage + '.html';
