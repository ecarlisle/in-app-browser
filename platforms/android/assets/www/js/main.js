var ref = null;

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  ref = window.open('http://www.ericcarlisle.com','_blank','location=yes');
  ref.addEventListener('loadstop', inject);
}
  /*      
  function inject() {
    $.get( "js/test.js", function( data ) {
    ref.insertCSS({""});
  })  
  */

  // Causes "Load Error" on IOS.
  ref.insertCSS({file:"test.css"});
  //ref.executeScript({file:"js/test.js"});

  // Causes "Load Error" on IOS.
  //ref.executeScript({code:"alert('ok2')"});
  //ref.insertCSS({code:"*{font-size: 60px !important;}"});
}
