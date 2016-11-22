// modernizr/network/xhr2
addTest('xhr2', function () {
  return 'XMLHttpRequest' in window && 'withCredentials' in new XMLHttpRequest();
});
