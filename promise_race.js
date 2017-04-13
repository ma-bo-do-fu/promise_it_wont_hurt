//Promise.race()は一つでもresolve, rejectが呼び出されたら、thenもしくはcatchが呼びされます

var taskA = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log('taskA');
    resolve();
  }, 1000);
});

var taskB = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log('taskB');
    resolve();
  }, 100);
});

var before = new Date();
Promise.race([taskA, taskB]).then(function () {
  var after = new Date();
  var result = after.getTime() - before.getTime();
  console.log(result);
}).catch(function () {
  console.log('error');
});

//いずれかのPromiseのresolveが呼びされたタイミングでthenメソッドが実行される
//thenメソッドが呼びされた後もまだ終了していないPromiseの処理は継続