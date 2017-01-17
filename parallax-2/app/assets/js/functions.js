var
  init,
  layer_1,
  layer_2,
  layer_3,
  layer_4,
  parallax
;

layer_1 = document.getElementById('layer_1');
layer_2 = document.getElementById('layer_2');
layer_3 = document.getElementById('layer_3');
layer_4 = document.getElementById('layer_4');


init = function init() {
  window.addEventListener("scroll", parallax, false);
}

parallax = function parallaxF() {
  layer_1.style.top = -(window.pageYOffset / 3) + 'px';
  layer_2.style.top = -(window.pageYOffset / 6) + 'px';
  layer_3.style.top = -(window.pageYOffset / 7) + 'px';
  layer_4.style.top = -(window.pageYOffset / 7) + 'px';
}

init();
