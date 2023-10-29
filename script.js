const params = [1, 2, 3, 4, 5];

// 1.Istenilen sayda  gelen datalarin Ortalamasini veren Js function yazin.Call back istifade edeceksiz.
// let mean = 0;
// let sum = 0;
// function findMean(params, cb) {for (let i = 0; i < params.length; i++) {cb(params[i]);}}
// findMean(params, function (x) {
//   sum += x;
//   mean = sum / params.length;
// });
// console.log(mean);

// 2.Istenilen sayda gelen datalarin cut olanlarinin toplamini tapan Js function yazin.Call back istifade edeceksiz.

// let sum=0
// let findEvenSum = (params, cb) => {
//   for (let i = 0; i < params.length; i++) {
//     cb(params[i]);
//   }
// }
// findEvenSum(params,function(x){
//   if (x%2===0) {
//     sum+=x
//   }
// })
// console.log(sum);

// 3.Istenilen sayda gelen datalarin tek olanlarinin toplamini tapan Js function yazin.Call back istifade edeceksiz.
// let sum = 0;
// function findOddSum(params, cb) {
//   for (let i = 0; i < params.length; i++) {
//     cb(params[i]);
//   }
// }
// findOddSum(params,function(x){
//   if (x%2===1) {
//     sum+=x
    
//   }})
//   console.log(sum);


// 4.Istenilen sayda gelen datalarin cut olanlarin toplamini tek olanlarinin toplamina olan hasilini tapan Js function yazin.Call back istifade edeceksiz.


// let sumOdd=0
// let sumEven=0
// let mul=1
// let findEvenOdd = (params, cb) => {
//   for (let i = 0; i < params.length; i++) {
//     cb(params[i])
    
//   }
// }
// findEvenOdd(params,function(x){
//   if(x%2===0){
//     sumEven+=x
//      }
//      if (x%2===1) {
//     sumOdd+=x  
//     }
// })
// mul=sumEven*sumOdd
// console.log(mul);


