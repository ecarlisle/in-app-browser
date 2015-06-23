var ref = null;

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady(){
//  alert('device ready');
  ref = window.open('http://www.google.com','_blank','location=yes');
  ref.addEventListener('loadstop', function(){
    
    // This works.
    /*
    $.get( "js/test.js", function(data) {
      ref.executeScript({code:data});
    });
    $.get( "css/test.css", function(data) {
      ref.executeScript({code:data});
    });
    */

    // This works.
    ref.executeScript({code:"alert('ok2')"});
    ref.insertCSS({code:"*{font-size: 60px !important;}"});

    // This does not work.
    //ref.executeScript({file:"js/test.js"});
    //ref.insertCSS({file:"test.css"});


  });
}
  /*      
  */


//}
