dados = []

const nome = document.getElementById('user')
const email = document.getElementById('1email')
const senha = document.getElementById('senha')
const res = document.getElementById('res')

function logar(){
    return nome.value.length == 0 || email.value.length == 0 || senha.value.length == 0 
    ? res.innerHTML = 'Os campos são obrigatorios!' 
    : location.href = 'sitep/index.html'
}
