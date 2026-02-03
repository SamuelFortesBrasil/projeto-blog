const endpointFriends = 'https://jsonplaceholder.typicode.com/users'
const container = document.getElementById('container-carrosel')

let index = 0

async function Amigos() {
    const resposta = await fetch(endpointFriends)
    const dados = await resposta.json()
    console.log(dados)
    dados.map((e)=>{
        const itemCarrossel = document.createElement('div')
        itemCarrossel.classList.add('itemCarrosel')
        const username = document.createElement('h4')
        const site = document.createElement('p')
        const email = document.createElement('p')
        const adicionar = document.createElement('button')
        adicionar.classList.add('adicionar')

        username.innerText = e.username
        site.innerText = e.website
        email.innerText = e.email
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

const btVoltar = document.getElementById('voltar')
const btAvancar = document.getElementById('avancar')

btAvancar.addEventListener('click',()=>{
    index++
    container.style.transform = `translateX(${ -200 * index}px)`
    if(index >= 10){
        index = 0
        container.style.transform = `translateX(${ -200 * index}px)`
    }
})

btVoltar.addEventListener('click',()=>{
    if(index > 0){
        index--
        container.style.transform = `translateX(${ -200 * index}px)`
    }
})


Amigos()
