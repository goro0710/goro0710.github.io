//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
function showMessage(){
  if(this.status == 200){
    console.log(this.arguments['successMsg']+' '+this.responseText);
  }else{
    console.log(this.arguments['failMsg']+' '+this.statusText);
  }
}

function sendXHR(method, url, asynReq, callback, successMsg, failMsg){
  let xhr = new XMLHttpRequest();
  xhr.open(method, url, asynReq);
  xhr.onload = callback;
  xhr.onerror = callback;
  xhr.arguments = { successMsg : successMsg, failMsg, failMsg} 
  xhr.send(null);
}

function sendRequest(){
  let method = "GET";
  let url = "https://www.google.com";
  let asynReq = true;
  sendXHR(method, url, asynReq, showMessage, "Request Successful :","Request Failed :");
}

sendRequest();