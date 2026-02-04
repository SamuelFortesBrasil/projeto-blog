const endpointFriends = 'https://jsonplaceholder.typicode.com/users'
const container = document.getElementById('container-carrosel')

let index = 0

async function Amigos() {
    const resposta = await fetch(endpointFriends)
    const dados = await resposta.json()
    //console.log(dados)
    dados.map((e)=>{
        const itemCarrossel = document.createElement('div')
        itemCarrossel.classList.add('itemCarrosel')
        const username = document.createElement('h4')
        const site = document.createElement('p')
        const email = document.createElement('p')
        const adicionar = document.createElement('button')
        adicionar.classList.add('adicionar')

        username.innerText = "Nome: " +  e.username
        site.innerText = "Site: " + e.website
        email.innerText = "Email: " +  e.email
        adicionar.innerHTML = `<i class="bi bi-person-fill-add"></i> adicionar amizade`

        adicionar.addEventListener('click',()=>{
            if(adicionar.innerHTML == `<i class="bi bi-person-fill-add"></i> adicionar amizade`){
                adicionar.innerHTML = `<i class="bi bi-person-fill-check"></i> adicionado`
            }else{
                adicionar.innerHTML = `<i class="bi bi-person-fill-add"></i> adicionar amizade`
            }
        })

        itemCarrossel.appendChild(username)
        itemCarrossel.appendChild(site)
        itemCarrossel.appendChild(email)
        itemCarrossel.appendChild(adicionar)
        container.appendChild(itemCarrossel)

    })
}

Amigos()

const btVoltar = document.getElementById('voltar')
const btAvancar = document.getElementById('avancar')


btAvancar.addEventListener('click',()=>{
    const itens = document.querySelectorAll('.itemCarrosel')
    const largura = itens[0].offsetWidth
    //console.log(largura)
    index++
    container.style.transform = `translateX(${ -largura * index}px)`
    if(index >= 10){
        index = 0
        container.style.transform = `translateX(${ -largura * index}px)`
    }
})

btVoltar.addEventListener('click',()=>{
    const itens = document.querySelectorAll('.itemCarrosel')
    const largura = itens[0].offsetWidth
    //console.log(largura)
    if(index > 0){
        index--
        container.style.transform = `translateX(${ -largura * index}px)`
    }
})


