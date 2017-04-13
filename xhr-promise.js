const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const getURL = (URL) => {
  return new Promise(reqest);
};

const reqest = (resolve, reject) => {
  const req = new XMLHttpRequest();
  req.open('GET', URL, true);
  req.onload = () => {
    if (req.status === 200) {
      resolve(req.responseText);
    } else {
      reject(new Error(req.statusText));
    }
  };
  req.onerror = function () {
    reject(new Error(req.statusText));
  };
  req.send();
};

const URL = "http://httpbin.org/get";
getURL(URL).then(function onFulfilled(value){
    console.log(value);
}).catch(function onRejected(error){
    console.error(error);
});