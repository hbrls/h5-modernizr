var Modernizr = {};

function addTest(key, func) {
  Modernizr[key] = func();
}

module.exports = Modernizr;
