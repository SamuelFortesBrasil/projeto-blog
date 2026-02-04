const endpoint = "https://jsonplaceholder.typicode.com/posts"
const main = document.querySelector('#post-container')
const aguarde = document.getElementById('aguarde')
const divDoPost = document.getElementById('post')
const sectionComentarios = document.getElementById('comentarios')

const urlBrowser = window.location.search
const urlcontida = urlBrowser.slice(4)
//console.log(urlBrowser)
//console.log(urlcontida)
//Pega Valores da API e recupera o valor do Array para exibição de um só post

import { Perfil } from "./script.js"

async function RecuperarPost() {
    try{
        const resposta = await fetch(endpoint)
        const dados = await resposta.json()
        aguarde.style.display = 'none'
        //Desativa Msg inicial
        //console.log(dados[urlcontida-1])
        // Pega os dados de posts da API, porém com base na url contida pega somente um dos 100 posts.
        main.style.display = 'block'

        //Recuperando o perfil do post-----------------------------
        const divPerfil = document.createElement('div')
        divPerfil.classList.add('divPerfil')

        const imgPerfil = document.createElement('img')
        imgPerfil.classList.add('imagemPerfil')
        imgPerfil.setAttribute('src',`imagens/${Perfil[urlcontida-1].foto}`)



        const nomePerfil = document.createElement('h4')
        const recado = document.createElement('p')

        nomePerfil.innerText = Perfil[urlcontida-1].nome
        recado.innerText = Perfil[urlcontida-1].recado

        divPerfil.appendChild(imgPerfil)
        divPerfil.appendChild(nomePerfil)
        divPerfil.appendChild(recado)

  
        //Fim------------------------------------------------------

        //Criando Elementos
        const titulo = document.createElement('h2')
        const corpo = document.createElement('p')
        //Preenchendo Contedúdo
        titulo.innerText = dados[urlcontida-1].title //Parece complicado o meu
        corpo.innerText = dados[urlcontida-1].body  //método, mais achei fácil
        
        //Pinando Filhos aos Pais
        divDoPost.appendChild(divPerfil)
        divDoPost.appendChild(titulo)
        divDoPost.appendChild(corpo)
        divDoPost.classList.add('posts')

    } catch(erro){
        console.error(erro)
    }
}
//Preenchido a página com o post recuperado!

//Função para pegar os comentários do post especifico recuperado acima
const criandoComentario = (c) =>{
    const div = document.createElement('div')
    div.classList.add('comentarios')
    const titulo = document.createElement('h4')
    const corpo = document.createElement('p')
    
    titulo.innerText = c.email
    corpo.innerText = c.body
    div.appendChild(titulo)
    div.appendChild(corpo)
    sectionComentarios.appendChild(div)
}
async function pegandoComentarios(id) {
    const resposta = await fetch(`${endpoint}/${id}/comments`)
    const dados = await resposta.json()
  //  console.log(dados)
    
    
    dados.map((comentario)=>{
            criandoComentario(comentario)
    })
}

//Fim da Função-------------------------------------------------------------

//Programando meu Próprio Formulário
const formcomentario = document.querySelector('#meu-comentario')
const email = document.querySelector('#email')
const corpoComentario = document.querySelector('#body')


async function enviarcomentario(comentario) {
    const resposta = await fetch(`${endpoint}/${urlcontida}/comments`,{
        method: "POST",
        body: comentario,
        headers:{
            "Content-type":"application/json",
        }
    })
    const dado = await resposta.json()
    criandoComentario(dado)
}

formcomentario.addEventListener('submit',(e)=>{
    e.preventDefault()
    let comentario = {
        email: email.value,
        body: corpoComentario.value
    }
    comentario = JSON.stringify(comentario)
    
    enviarcomentario(comentario)
    email.value = ''
    corpoComentario.value = ''
})


RecuperarPost()
pegandoComentarios(urlcontida) //OK, não sei ao certo o porque de eu não poder colocar o -1 para o primeiro post da API, então se eu o removo tudo funciona como esperado.

//Entendi, os post são armazenados nos index do JSON, começando do 0

// Os comentários são armazenados somente nos ID, esses tendo contagem inical a partir do 1.