dados = []

const nome = document.getElementById('user')
const email = document.getElementById('1email')
const senha = document.getElementById('senha')
const res = document.getElementById('res')

function logar(){
    event.preventDefault()
    if (nome.value.length == 0 ||email.value.length ==0|| senha.value.length == 0) {
        res.style.color = 'red'
        res.innerHTML = 'Os campos são obrigatorios!'
        setTimeout(() =>{
            res.innerHTML = ''
        }, 2000)
    } else {
        res.style.color = 'green'
        res.innerHTML = 'Logado com sucesso!'
        setTimeout(() => {
            location.href = '../sitep/index.html'
        }, 2000);
    }
}
