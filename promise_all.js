//Promise.all()メソッドはPromiseオブジェクトの配列を受け取り、全てのPromiseオブジェクトがresolveされたタイミングでthenが呼び出される

let taskA = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log('taskA');
    resolve();
  }, 1000);
});

let taskB = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log('taskB');
    resolve();
  }, 100);
});

let before = new Date();
Promise.all([taskA, taskB]).then(function () {
  var after = new Date();
  var result = after.getTime() - before.getTime();
  console.log(result);
});

// taskAとtaskBは並行で実行されている
// taskAとtaskBが終わってからthenが呼び出されている