var resposta

document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('carrega-informacao')
    btn.addEventListener('click', function () {
    chrome.extension.sendMessage({ action: "sentFromPopUpToBackGround" });

    })
})


chrome.extension.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action == 'sentFromBackGroundToPopUp') {
        resposta = request
        setValores(resposta)
    }
})

function setValores(resposta) {
    document.getElementById('nome-empresa').value = resposta.nomeEmpresa
    document.getElementById('nome-fantasia').value = resposta.nomeFantasia
    document.getElementById('cnpj').value = resposta.cnpj
    document.getElementById('logradouro').value = resposta.logradouro
    document.getElementById('numero').value = resposta.numero
    document.getElementById('bairro').value = resposta.bairro
    document.getElementById('cidade').value = resposta.municipio
    document.getElementById('uf').value = resposta.uf
    document.getElementById('cep').value = resposta.cep
    document.getElementById('telefone').value = resposta.telefone
}