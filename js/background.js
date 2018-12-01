var response

chrome.extension.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action == 'sentFromPopUpToBackGround') {

        if (response) {
            chrome.extension.sendMessage({
                action: "sentFromBackGroundToPopUp",
                nomeEmpresa: response.nomeEmpresa,
                nomeFantasia: response.nomeFantasia,
                logradouro: response.logradouro,
                numero: response.numero,
                cep: response.cep,
                bairro: response.bairro,
                municipio: response.municipio,
                uf: response.uf,
                telefone: response.telefone,
                cnpj: response.cnpj
            })

        }
    }
})


chrome.extension.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action == 'sentFromContentToBackGround') {
        response = request
    }
})
