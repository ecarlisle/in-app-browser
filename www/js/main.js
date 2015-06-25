var ref = null;

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady(){
//  alert('device ready');
  ref = window.open('http://www.google.com/','_blank','location=yes');
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
    //ref.insertCSS({code:"*{font-size: 60px !important;}"});

    // This does not work.
    //ref.executeScript({file:"js/test.js"});
    //ref.insertCSS({file:"test.css"});

    // This does not work.
    //ref.executeScript({file:"http://localhost/js/test.js"});
    //ref.insertCSS({file:"http://localhost/css/test.css"});

    inject();
                       
  });
}

function inject(){
    // JS works this way.
    ref.executeScript({file:"js/test.js"});

    // But not CSS.
    // ref.insertCSS({file:"css/test.css"});

    // Or this.
    // var style = $("<link rel='stylesheet' type='text/css' href='css/test.css'></script>");
    // $('head').append(style);
    // ref.insertCSS({file:"css/test.css"});
}