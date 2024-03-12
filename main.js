const inputBeneficiario = document.querySelector('#input-beneficiario')
const inputConta = document.querySelector('#input-conta')
const inputValor = document.querySelector('#input-valor')
const form = document.querySelector('#form')
const res = document.querySelector('#res')



function validarNome(){
    
    const mensagem = `A contia de R$:<b>${inputValor.value}</b> foi depositada na conta:<b>${inputConta.value}</b> do cliente: <b>${inputBeneficiario.value}</b>`

    const nomes = String(inputBeneficiario.value)
    
    if(nomes.length >= 10){
        res.innerHTML = mensagem
        res.style.color = '#2d3436'
    } else {
        res.innerHTML = 'O nome não estar completo'
        res.style.color = 'red'
    }

    inputBeneficiario.value = ''
    inputConta.value = ''
    inputValor.value = ''
}


form.addEventListener('submit', function(e){
    e.preventDefault();

    validarNome()
})