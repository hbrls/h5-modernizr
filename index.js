var Modernizr = {};

function addTest(key, func) {
  Modernizr[key] = func();
}

// modernizr/es6/promise
addTest('promise', function () {
  return 'Promise' in window &&
  // Some of these methods are missing from
  // Firefox/Chrome experimental implementations
  'resolve' in window.Promise &&
  'reject' in window.Promise &&
  'all' in window.Promise &&
  'race' in window.Promise &&
  // Older version of the spec had a resolver object
  // as the arg rather than a function
  (function() {
    var resolve;
    new window.Promise(function(r) { resolve = r; });
    return typeof resolve === 'function';
  }());
});

// modernizr/network/xhr2
addTest('xhr2', function () {
  return 'XMLHttpRequest' in window && 'withCredentials' in new XMLHttpRequest();
});

addTest('screen', function () {
  var screenWidth = screen.width;
  var innerWidth = window.innerWidth;
  // var clientWidth = document.documentElement.clientWidth;
  var screenHeight = screen.height;
  var innerHeight = window.innerHeight;
  // var clientHeight= document.documentElement.clientHeight;
  var devicePixelRatio = window.devicePixelRatio || 1;

  if (screenWidth / innerWidth > 1 && devicePixelRatio > 1) {
    screenWidth = screenWidth / devicePixelRatio;
    screenHeight = screenHeight / devicePixelRatio;
  }

  if (screenWidth % 1) {
    screenWidth = screenWidth.toFixed(2);
  }

  if (screenHeight % 1) {
    screenHeight = screenHeight.toFixed(2);
  }

  return screenWidth + 'x' + screenHeight + '@' + devicePixelRatio;
});

module.exports = Modernizr;
