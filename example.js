var html = require('./');

var tag = '<script>';
var safeHTMLString = html`This is a <b>dangerous</b> HTML tag: ${tag}!`;
console.log(safeHTMLString);
