Promise.resolve()
  .then(function () {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        console.log('taskA');
        resolve('taskA death');
      }, 16);
    });
  })
  .then(function (value) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        console.log(value);
        console.log('taskB');
        resolve('taskB death');
      }, 1);
    });
  })
  .then(function (value) {
    console.log('then');
    console.log(value);
  }).catch(function (error) {
    console.log(error);
  });