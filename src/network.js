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
