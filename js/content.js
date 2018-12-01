var titulo = document.getElementById('data-result').querySelectorAll('table > thead')
var descricao = document.getElementById('data-result').querySelectorAll('table > tbody')
var nomeEmpresa
var nomeFantasia
var logradouro
var numero
var cep
var bairro
var municipio
var uf
var telefone
var cnpj

window.setInterval(function () {
    titulo = document.getElementById('data-result').querySelectorAll('table > thead')
    descricao = document.getElementById('data-result').querySelectorAll('table > tbody')

    if(document.getElementsByTagName('h5')[0]){
        cnpj = document.getElementsByTagName('h5')[0].innerText.substr(5,18)
    }

    for (var percorre1 = 0; percorre1 < titulo.length; percorre1++) {
        for (var percorre2 = 0; percorre2 < titulo[percorre1].querySelectorAll('thead > tr > th').length; percorre2++) {
            if (titulo[percorre1].querySelectorAll('thead > tr > th')[percorre2].innerHTML) {
                switch (titulo[percorre1].querySelectorAll('thead > tr > th')[percorre2].innerHTML) {
                    case 'Nome Empresarial':
                        var nomeEmpresa = descricao[percorre1].querySelectorAll('tbody > tr > td')[percorre2].innerHTML
                        break
                    case 'Nome Fantasia':
                        var nomeFantasia = descricao[percorre1].querySelectorAll('tbody > tr > td')[percorre2].innerHTML
                        break
                    case 'Logradouro':
                        var logradouro = descricao[percorre1].querySelectorAll('tbody > tr > td')[percorre2].innerHTML
                        break
                    case 'Número':
                        var numero = descricao[percorre1].querySelectorAll('tbody > tr > td')[percorre2].innerHTML
                        break
                    case 'CEP':
                        var cep = descricao[percorre1].querySelectorAll('tbody > tr > td')[percorre2].innerHTML
                        break
                    case 'Bairro':
                        var bairro = descricao[percorre1].querySelectorAll('tbody > tr > td')[percorre2].innerHTML
                        break
                    case 'Município':
                        var municipio = descricao[percorre1].querySelectorAll('tbody > tr > td')[percorre2].innerHTML
                        break
                    case 'UF':
                        var uf = descricao[percorre1].querySelectorAll('tbody > tr > td')[percorre2].innerHTML
                        break
                    case 'Telefone':
                        var telefone = descricao[percorre1].querySelectorAll('tbody > tr > td')[percorre2].innerHTML
                        break
                }
            }
        }
    }

    if (nomeEmpresa) {
        chrome.runtime.sendMessage({
            action: "sentFromContentToBackGround",
            nomeEmpresa: nomeEmpresa,
            nomeFantasia: nomeFantasia,
            logradouro: logradouro,
            numero: numero,
            cep: cep,
            bairro: bairro,
            municipio: municipio,
            uf: uf,
            telefone: telefone,
            cnpj: cnpj
        })
    }

}, 5000)