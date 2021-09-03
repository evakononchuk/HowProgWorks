'use strict';

function test() {
  num;
  console.log(num);
  var num = 8;
  color();
  function color() {
    console.log(num + 2);
  }
}
test();
