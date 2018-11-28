
window.setInterval(function () {
    var titulo = document.getElementById('data-result').querySelectorAll('table > thead')
    var descricao = document.getElementById('data-result').querySelectorAll('table > tbody')

    for (var percorre1 = 0; percorre1 < titulo.length; percorre1++) {
        for (var percorre2 = 0; percorre2 < titulo[percorre1].querySelectorAll('thead > tr > th').length; percorre2++) {

            if (titulo[percorre1].querySelectorAll('thead > tr > th')[percorre2].innerHTML) {
                switch (titulo[percorre1].querySelectorAll('thead > tr > th')[percorre2].innerHTML) {
                    case 'Nome Empresarial':
                        console.log(descricao[percorre1].querySelectorAll('tbody > tr > td')[percorre2].innerHTML)
                        break
                    case 'Nome Fantasia':
                        console.log(descricao[percorre1].querySelectorAll('tbody > tr > td')[percorre2].innerHTML)
                        break
                    case 'Logradouro':
                        console.log(descricao[percorre1].querySelectorAll('tbody > tr > td')[percorre2].innerHTML)
                        break
                    case 'Número':
                        console.log(descricao[percorre1].querySelectorAll('tbody > tr > td')[percorre2].innerHTML)
                        break
                    case 'CEP':
                        console.log(descricao[percorre1].querySelectorAll('tbody > tr > td')[percorre2].innerHTML)
                        break
                    case 'Bairro':
                        console.log(descricao[percorre1].querySelectorAll('tbody > tr > td')[percorre2].innerHTML)
                        break
                    case 'Município':
                        console.log(descricao[percorre1].querySelectorAll('tbody > tr > td')[percorre2].innerHTML)
                        break
                    case 'UF':
                        console.log(descricao[percorre1].querySelectorAll('tbody > tr > td')[percorre2].innerHTML)
                        break
                    case 'Telefone':
                        console.log(descricao[percorre1].querySelectorAll('tbody > tr > td')[percorre2].innerHTML)
                        break
                }
            }
        }
    }
}, 5000)