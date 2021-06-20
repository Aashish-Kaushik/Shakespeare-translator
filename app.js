var btntranslater = document.querySelector("#btn");
var input = document.querySelector("#input");
var output = document.querySelector("#output");
var serverURL = "https://api.funtranslations.com/translate/shakespeare.json";
function gettranslationURL(input) {
  return serverURL + "?" + "text=" + input;
}
function errorhandler(error) {
  console.log("error occured", error);
  alert("something wrong with server! try again after some time");
}
function clickHandler() {
  var inputText = input.value;
  fetch(gettranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      output.innerText = translatedText;
    })
    .catch(errorhandler);
}
btn.addEventListener("click", clickHandler)