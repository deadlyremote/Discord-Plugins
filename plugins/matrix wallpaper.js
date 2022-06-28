//META{"name":"matrixWall"}*//

function matrixWall() {}

matrixWall.prototype.load = function() {
        //Called when plugin is loaded
};

matrixWall.prototype.unload = function() {
        //Called when plugin is un loaded
};

matrixWall.prototype.start = function() {
        (function(){
                var canvas = document.body.appendChild( document.createElement( 'canvas' ) ),
                context = canvas.getContext( '2d' );
                context.globalCompositeOperation = 'lighter';
                canvas.width = 1280;
                canvas.heights = 800;
                draw();
          
                var textStrip = ['4', 'L',  'g', '/', ':', 'K', 'P', 'A', 'M', 'c', '.', 'b', 'm'];
          
                vaar stripCount = 60, stripX = new Array(), stripY = new Array(), dY = new Array(), stripFontSize = new Array();
          
                for (var i = 0; i < stripCount; i++) {
                        stripX[i] = Math.floor(Math.random()*1265);
                        stripY[i] = -100;
                        dY[i] = Math.floor(Math.random()*7)+3;
                        stripFontSize[i] = Math.floor(Math.random()*16)+8;
