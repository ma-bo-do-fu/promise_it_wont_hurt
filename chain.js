function taskA() {
  console.log("TaskA");
}

function taskB() {
  console.log("TaskB");
}


function onRejected(error) {
  console.log("error = " + error);
}

var promise = Promise.resolve();
promise
  .then(taskA)
  .then(taskB)
  .catch(onRejected);

var pro = Promise.reject(new Error('this is new error'));
pro
  .then(taskA)
  .then(taskB)
  .catch(onRejected);

var pro3 = Promise.resolve();
pro3
  .then(taskA)
  .then(taskC)
  .then(taskB)
  .catch(onRejected);

  function taskC() {
    console.log('taskC');
    throw new Error('this is new error');
  }