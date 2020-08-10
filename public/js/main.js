"use strict";

var random = function random(min, max) {
  return Math.random() * (max - min) + min;
};

var colorList = ['#173F5F', '#20639B', '#3CAEA3', '#F6D55C', '#ED553B', '#D65542'];
var bg = document.querySelector('.bg');

for (var i = 0; i < bg.clientWidth / 10; i++) {
  var w = bg.clientWidth;
  var h = bg.clientHeight;
  var size = random(30, 120).toFixed();
  var alpha = random(0.3, 0.6).toFixed(1);
  var color = random(0, 5).toFixed();
  var dot = document.createElement('div');
  dot.className = 'dot';
  var x = random(0, w - size / 2);
  var y = random(0, h - size / 2); // console.log(size);

  dot.style.height = size + 'px';
  dot.style.width = size + 'px';
  dot.style.backgroundColor = colorList[color];
  bg.appendChild(dot); // fromTo(객체, 지속시간, { })

  TweenMax.fromTo(dot, 8, {
    opacity: 0,
    x: x,
    y: y
  }, {
    opacity: .4,
    x: x + random(-50, 50),
    y: y + random(-30, 30),
    // 무제한 반복 => -1
    repeat: -1,
    delay: random(0, 4),
    yoyo: true
  });
} //Wave 애니메이션


gsap.to('.wave-container #wave1', {
  duration: 60,
  morphSVG: '#wave2',
  repeat: -1,
  yoyo: true
});