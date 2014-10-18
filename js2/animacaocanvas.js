// JavaScript Document
$(document).ready(function(e) {
    altura = $(window).height();
	largura = $(window).width();
	CANVAS_WIDTH = largura ;
    animacao()
	verificalogo()
	

var canDetect = "onorientationchange" in window;
var orientationTimer = 0;
$(window).bind(canDetect ? "orientationchange" : "resize",
function(evt) {
clearTimeout(orientationTimer);
orientationTimer = setTimeout(function( ) {
$("#teste").html(window.innerWidth);
altura = window.innerHeight;
largura = window.innerWidth;
CANVAS_WIDTH = largura ;

verificalogo()
}, 100);
});



function verificalogo()
{
	
	
	if(largura < 571){
	//$("img[name = logor]").addClass("logo2");
	$("#headerprincipal").css("height","500px");
	//$("#headerprincipal").css("height",""+altura+"px");
	}else
	if(largura > 500 && largura <1300){

	$("#headerprincipal").css("height","720px");
	//$("#headerprincipal").css("height",""+altura+"px");
	}else
	if(altura>= 800 && largura>1400 && largura <=1899)
	{
		$("#headerprincipal").css("height",""+altura+"px");
	}else
	if(largura>1900 && altura <1100)
	{ 
		$("#headerprincipal").css("height","1050px");
	}else
	if(largura>1900 && altura >1101)
	{
		$("#headerprincipal").css("height",""+altura+"px");
	}else
	$("#headerprincipal").css("height","780px");
	
	
	
	
	
}
	
	
//***********************************//	

function filterPath(string) {
return string
.replace(/^\//,'')
.replace(/(index|default).[a-zA-Z]{3,4}$/,'')
.replace(/\/$/,'');
}
$('a[href*=#]').each(function() {
if ( filterPath(location.pathname) == filterPath(this.pathname)
&& location.hostname == this.hostname
&& this.hash.replace(/#/,'') ) {
var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
if ($target) {
var targetOffset = $target.offset().top;
$(this).click(function() {
$('html, body').animate({scrollTop: targetOffset}, 400);
return false;
});
}
}
});



//************************************//

function animacao(){
  window.keydown = {};   

//Criando a tela usando jquery
//CANVAS_WIDTH = largura ;
var CANVAS_HEIGHT = 540;
var FPS = 30;

var canvasElement = $("<canvas width='" + CANVAS_WIDTH + 
                      "' height='" + CANVAS_HEIGHT + "' id='canvasanime'></canvas>");
					 
var canvas = canvasElement.get(0).getContext("2d"); //da contexto 2d ao canvas
canvasElement.appendTo('#animacao'); //adiciona o canvas ao body

//add testo
 enemies = [];
function Enemy(I) {
  I = I || {};

  I.active = true;
  I.age = Math.floor(Math.random() * 188);

  I.color = "#CCC";
  I.texto = "001101001";
  if(Math.random() >0.1 && Math.random() <=0.3 )
  {
	  I.font = "50px Arial";
  }else
   if(Math.random() >0.3 && Math.random() <=0.6 )
  I.font = "25px Arial";
  else
   if(Math.random() == 0.1 )
   I.font = "80px Arial";
   else
   I.font = "16px Arial";
   
  
  
  I.x = (CANVAS_WIDTH/4) + Math.random() * CANVAS_WIDTH / 2;
  if(Math.random() ==0.5)
  {
   I.x = 12;
}else
 I.x = Math.random() * CANVAS_WIDTH ;

 
  I.y = 0;
  I.xVelocity = 0
  I.yVelocity = 2;

  I.width = 32;
  I.height = 32;

  I.inBounds = function() {
    return I.x >= 0 && I.x <= CANVAS_WIDTH &&
      I.y >= 0 && I.y <= CANVAS_HEIGHT;
  };

  I.draw = function() {
    canvas.fillStyle = this.color;
	canvas.font = I.font;
    canvas.fillText(this.texto, this.x, this.y);
  };

  I.update = function() {
    I.x += I.xVelocity;
    I.y += I.yVelocity;

    I.xVelocity = 3 * Math.sin(I.age * Math.PI / 64);

    I.age++;

    I.active = I.active && I.inBounds();
  };
  //metodo explodir
I.explode = function() {
    this.active = false;
    // Extra Credit: Add an explosion graphic
  };

  return I;
};


//LOOP DO JOGO
 setInterval(function() {
          update();
          draw();
        }, 1000/FPS);



	  function update()
	   {
		  enemies.forEach(function(enemy) {
		  enemy.update();
		});
	  
		enemies = enemies.filter(function(enemy) {
		  return enemy.active;
		});
		if(Math.random() < 0.1) {
		  enemies.push(Enemy());
		}
	   }


	  function draw()
	  {
	  canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
	  //pinta inimigo
		enemies.forEach(function(enemy) {
		  enemy.draw();
		}); 
	  }






}//fimanimacao

});