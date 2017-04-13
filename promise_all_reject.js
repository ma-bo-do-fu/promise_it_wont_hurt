//Promise.all()メソッドはPromiseオブジェクトの配列を受け取り、全てのPromiseオブジェクトがresolveされたタイミングでthenが呼び出される

var taskA = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log('taskA');
    resolve();
  }, 1000);
});

var taskB = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log('taskB');
    reject();
  }, 100);
});

var before = new Date();
Promise.all([taskA, taskB]).then(function () {
  var after = new Date();
  var result = after.getTime() - before.getTime();
  console.log('then');
}).catch(function () {
  console.log('catch');
});

// 配列に指定されたいずれかのPromiseでrejectが呼び出されたタイミングでcatchメソッドが呼びされ、実行される
// catchメソッドが呼びされても終了していないPromiseの処理は継続される
// 全てのPromiseの処理が終わってもthenメソッドは呼び出されない