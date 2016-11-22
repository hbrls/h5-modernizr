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
