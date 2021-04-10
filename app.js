// // console.log("script is working form a differnet file")

// //input
// var username = prompt("give me your user name")

// //processing
// var welcomeMessage = " this script works " + username;

// //output
// alert(welcomeMessage)



var btnTranslate = document.querySelector('#btn-translate');
var txtInput = document.querySelector('#txt-input');
var outputDiv = document.querySelector('#output');
// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something went wrong")
}

function clickHandler() {
    // outputDiv.innerText = "tabbsabbababa " + txtInput.value;
    var inputText = txtInput.value;
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
        })
    .catch(errorHandler)
};

btnTranslate.addEventListener("click",clickHandler)

