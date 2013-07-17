var img = document.getElementById('guru');
img.style.left = '0px';
img.style.top = '50px';
var movebtn = document.getElementById('walk');
var fastbtn = document.getElementById('fast');
var slowbtn = document.getElementById('slow');
var stopbtn = document.getElementById('stop');
var resetbtn = document.getElementById('reset');

var speed = 0;

function animate() {
	var max = document.width - img.width;

  if(parseInt(img.style.left, 10) > max + img.width) {
  	{ img.style.left = '0px';
      img.style.top = '50px';
    }
  }
  img.style.left = (parseInt(img.style.left, 10) + speed) + 'px';
}

setInterval(animate, 20);

fastbtn.onclick = function() { speed = speed + 1; };
slowbtn.onclick = function() { speed = speed - 1; };

movebtn.onclick = function() { speed = 2; };
stopbtn.onclick = function() { speed = 0; };
resetbtn.onclick = function() { img.style.left = '0px';
img.style.top = '50px';};