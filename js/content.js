// Variaveis usadas para pegar informações da tabela
var titulo
var descricao

// Cria objeto que será enviado como resposta
var resposta = {}


window.setInterval(function () {

    // Pega informações da tabela da pagina
    titulo = document.getElementById('data-result').querySelectorAll('table > thead')
    descricao = document.getElementById('data-result').querySelectorAll('table > tbody')


    // Percorre a tabela verificando se possui as informações no titulo
    for (var percorre1 = 0; percorre1 < titulo.length; percorre1++) {
        for (var percorre2 = 0; percorre2 < titulo[percorre1].querySelectorAll('thead > tr > th').length; percorre2++) {
            if (titulo[percorre1].querySelectorAll('thead > tr > th')[percorre2].innerHTML) {
                

                // Adiciona as informações da descrição da empresa para a resposta
                switch (titulo[percorre1].querySelectorAll('thead > tr > th')[percorre2].innerHTML) {
                    case 'Nome Empresarial':
                    resposta.nomeEmpresa = descricao[percorre1].querySelectorAll('tbody > tr > td')[percorre2].innerHTML
                    resposta.cnpj = document.getElementsByTagName('h5')[0].innerText.substr(5,18).replace(/[\./-]/g, "")
                    break
                    case 'Nome Fantasia':
                    resposta.nomeFantasia = descricao[percorre1].querySelectorAll('tbody > tr > td')[percorre2].innerHTML
                    break
                    case 'Logradouro':
                    resposta.logradouro = descricao[percorre1].querySelectorAll('tbody > tr > td')[percorre2].innerHTML
                    break
                    case 'Número':
                    resposta.numero = descricao[percorre1].querySelectorAll('tbody > tr > td')[percorre2].innerHTML
                    break
                    case 'CEP':
                    resposta.cep = descricao[percorre1].querySelectorAll('tbody > tr > td')[percorre2].innerHTML.replace(/[\./-]/g, "")
                    break
                    case 'Bairro':
                    resposta.bairro = descricao[percorre1].querySelectorAll('tbody > tr > td')[percorre2].innerHTML
                    break
                    case 'Município':
                    resposta.municipio = descricao[percorre1].querySelectorAll('tbody > tr > td')[percorre2].innerHTML
                    break
                    case 'UF':
                    resposta.uf = descricao[percorre1].querySelectorAll('tbody > tr > td')[percorre2].innerHTML
                    break
                    case 'Telefone':
                    resposta.telefone = descricao[percorre1].querySelectorAll('tbody > tr > td')[percorre2].innerHTML
                    break
                }
            }
        }
    }

    // Envia resposta para o background
    if (resposta) {
        resposta.action = 'sentFromContentToBackGround'
        chrome.runtime.sendMessage(resposta)
    }

}, 5000)