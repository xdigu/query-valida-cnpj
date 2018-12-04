var resposta

document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('carrega-informacao')
    btn.addEventListener('click', function () {
        chrome.extension.sendMessage({ action: "sentFromPopUpToBackGround" });

    })
})


chrome.extension.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action == 'sentFromBackGroundToPopUp') {
        resposta = request;

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
})


document.addEventListener('DOMContentLoaded', function () {
    var btn2 = document.getElementById('gera-query')
    btn2.addEventListener('click', function () {

        if (resposta) {
            if (document.getElementById('cb-tipo').value == 'pre-contrato') {
                document.getElementById('resultado-query').value = 
`'${document.getElementById('nome-empresa').value}',
'${document.getElementById('nome-fantasia').value}',
'${document.getElementById('cnpj').value}',
'${document.getElementById('nome-usuario').value}',
'${document.getElementById('email-usuario').value}',
'${document.getElementById('logradouro').value}',
'${document.getElementById('numero').value}',
'${document.getElementById('bairro').value}',
'${document.getElementById('cep').value}',
'${document.getElementById('telefone').value}',
NULL,
'${document.getElementById('uf').value}',
'${document.getElementById('cidade').value}'`

            } else if (document.getElementById('cb-tipo').value == 'transportadora') {
                document.getElementById('resultado-query').value = 
`'${document.getElementById('nome-empresa').value}',
'${document.getElementById('nome-fantasia').value}',
'${document.getElementById('cnpj').value}',
'${document.getElementById('nome-usuario').value}',
'${document.getElementById('email-usuario').value}',
'${document.getElementById('logradouro').value}',
'${document.getElementById('numero').value}',
'${document.getElementById('bairro').value}',
'${document.getElementById('cep').value}',
'${document.getElementById('telefone').value}',
NULL`

            } else if (document.getElementById('cb-tipo').value == 'planta') {
                document.getElementById('resultado-query').value = 
`@ID_EMPRESA,
'${document.getElementById('cnpj').value}',
'${document.getElementById('nome-fantasia').value}',
NULL,
NULL,
'${document.getElementById('uf').value}',
'S', 
NULL, 
NULL, 
NULL,
'${document.getElementById('nome-empresa').value}',
NULL,
'${document.getElementById('logradouro').value}, ${document.getElementById('numero').value}',
'${document.getElementById('cidade').value}',
'${document.getElementById('bairro').value}',
'${document.getElementById('cep').value}',
'BRASIL'`
            }   
        }

    })
})