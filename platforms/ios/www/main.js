var ref = null;

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  ref = window.open('http://www.ericcarlisle.com','_blank','location=yes');
  ref.addEventListener('loadstop', inject);
}
      
function inject() {

  // Causes "Load Error" on IOS.
  //ref.insertCSS({"/css/test.css"});
  alert('ok');
  ref.executeScript({"js/test.js"});

  // Causes "Load Error" on IOS.
  //ref.executeScript({code:"alert('ok2')"});
  //ref.insertCSS({code:"*{font-size: 60px !important;}"});
}
