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
Promise.race([taskA, taskB]).then(function () {
  var after = new Date();
  var result = after.getTime() - before.getTime();
  console.log(result);
}).catch(function () {
  console.log('error');
});
