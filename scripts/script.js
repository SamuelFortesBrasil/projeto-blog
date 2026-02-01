const endpoint = "https://jsonplaceholder.typicode.com/posts"
const main = document.querySelector('#posts-container')
const aguarde = document.getElementById('aguarde')

async function PegarPost() {
    const resposta = await fetch(endpoint)
    const dados = await resposta.json()
   // console.log(dados)
    aguarde.style.display = 'none'
    //Fetch para adquirir os 100 posts da API
    dados.map((post)=>{
        const div = document.createElement('div')
        div.classList.add('posts')
        const titulo = document.createElement('h2')
        const corpoPost = document.createElement('p')
        const link = document.createElement('a')
        link.classList.add('links')
        //Criação dos Elementos HTML e set de atributos

        titulo.innerText = post.title
        corpoPost.innerText = post.body
        link.innerText = "Ver Mais"
        link.setAttribute('href',`posts.html?id=${post.id}`)
        //Pinagem de conteúdo

        div.appendChild(titulo)
        div.appendChild(corpoPost)
        div.appendChild(link)

        main.appendChild(div)
        //Pinagem dos  elementos filhos aos elementos pais
    })

}


PegarPost()