var Modernizr = {};

function addTest(key, func) {
  Modernizr[key] = func();
}

module.exports = Modernizr;

// https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-network-information/index.html
// https://wicg.github.io/netinfo/#dfn-connection-types
addTest('network', function () {
  var connection = navigator['-webkit-connection'] || navigator.connection;
  var userAgent = navigator.userAgent;
  var network = 'UNKNOWN';
  var wechat;
  if (connection && connection.type) {
    network = connection.type.toUpperCase();
  } else if (wechat = userAgent.match(/MicroMessenger\/6\.\d\.\d NetType\/(\w+\+?)/i)) {
    if (wechat) {
      network = wechat[1].toUpperCase();
    }
  }

  return network;
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
