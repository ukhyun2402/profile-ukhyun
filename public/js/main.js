"use strict";

var random = function random(min, max) {
  return Math.random() * (max - min) + min;
};

var colorList = ['#173F5F', '#20639B', '#3CAEA3', '#F6D55C', '#ED553B'];

for (var i = 0; i < 120; i++) {
  var size = random(30, 80).toFixed();
  var alpha = random(0.3, 0.6).toFixed(1);
  var color = random(0, 4).toFixed();
  var dot = document.createElement('div');
  dot.className = 'dot';
  var bg = document.querySelector('.bg');
  var w = bg.clientWidth;
  var h = bg.clientHeight;
  var x = random(0, w - size / 2);
  var y = random(0, h - size / 2); // console.log(size);

  dot.style.height = size + 'px';
  dot.style.width = size + 'px';
  dot.style.backgroundColor = colorList[color];
  bg.appendChild(dot); // fromTo(객체, 지속시간, { })

  TweenMax.fromTo(dot, 5, {
    opacity: 0,
    x: x,
    y: y
  }, {
    opacity: .5,
    x: x + random(0, 10),
    y: y + random(-20, 20),
    // 무제한 반복 => -1
    repeat: -1,
    delay: random(0, 4),
    yoyo: true
  });
} //Wave 애니메이션


gsap.to('.wave1', {
  duration: 10,
  morphSVG: '.wave2',
  repeat: -1,
  yoyo: true,
  ease: 'back'
});