const endpoint = "https://jsonplaceholder.typicode.com/posts"
const main = document.querySelector('#post-container')
const aguarde = document.getElementById('aguarde')
const divDoPost = document.getElementById('post')

const urlBrowser = window.location.search
const urlcontida = urlBrowser.slice(4)
//Pega Valores da API e recupera o valor do Array para exibição de um só post

async function RecuperarPost() {
    try{
        const resposta = await fetch(endpoint)
        const dados = await resposta.json()
        aguarde.style.display = 'none'
        //Desativa Msg inicial
        console.log(dados[urlcontida-1])
        // Pega os dados de posts da API, porém com base na url contida pega somente um dos 100 posts.
        main.style.display = 'block'

        //Criando Elementos
        const titulo = document.createElement('h2')
        const corpo = document.createElement('p')
        //Preenchendo Contedúdo
        titulo.innerText = dados[urlcontida-1].title //Parece complicado o meu
        corpo.innerText = dados[urlcontida-1].body  //método, mais achei fácil
        
        //Pinando Filhos aos Pais
        divDoPost.appendChild(titulo)
        divDoPost.appendChild(corpo)
        divDoPost.classList.add('posts')

    } catch(erro){
        console.error(erro)
    }
}
//Preenchido a página com o post recuperado!

const btVoltar = document.getElementById('voltar')




RecuperarPost()