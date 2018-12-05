// Cria variável para receber o objeto de resposta do content.js
var resposta


// Escuta resposta enviada do popup.js
chrome.extension.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action == 'sentFromPopUpToBackGround') {

        // Envia resposta para o popup.js com as informações da empresa
        if (resposta) {
            resposta.action = 'sentFromBackGroundToPopUp'
            chrome.extension.sendMessage(resposta)
        }
    }
})


// Escuta resposta enviada do content.js
chrome.extension.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action == 'sentFromContentToBackGround') {
        resposta = request
    }
})