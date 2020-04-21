// # 闭包
// var data = [];

// for (var i = 0; i < 3; i++) {
//   data[i] = (function (i) {
//         return function(){
//             console.log(i);
//         }
//   })(i);
// }

// data[0]();  // 0
// data[1]();  // 1
// data[2]();  // 2



var data = [];

for (var i = 0; i < 3; i++) {
  data[i] = function () {
    console.log(i);
  };
}

data[0]();   // 3
data[1]();   // 3 
data[2]();   // 3