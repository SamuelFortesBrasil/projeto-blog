const endpoint = "https://jsonplaceholder.typicode.com/posts"
const main = document.querySelector('#posts-container')
const aguarde = document.getElementById('aguarde')
const Perfil=[
    {
        nome: "Lucas Andrade",
        foto: "01.jpg",
        recado: " - estudando"
    },
    {
        nome: "Rafael Monteiro",
        foto: "02.jpg",
        recado: " - trabalhando"
    },
    {
        nome: "Thiago Albuquerque",
        foto: "03.jpg",
        recado: " - ocupado"
    },
    {
        nome: "Camila Torres",
        foto: "04.jpg",
        recado: " - em reunião"
    },
    {
        nome: "Daniel Figueira",
        foto: "05.jpg",
        recado: " - descansando"
    },
    {
        nome: "Victor Pacheco",
        foto: "06.jpg",
        recado: " - assistindo aula"
    },
    {
        nome: "Pedro Malheiros",
        foto:"07.jpg",
        recado: " - fazendo tarefas"
    },
    {
        nome:"Bruno Tavares",
        foto:"08.jpg",
        recado: " - offline por agora"
    },
    {
        nome:"Larissa Guedes",
        foto:"09.jpg",
        recado: " - pausa"
    },
    {
        nome:"Renata Fonseca",
        foto:"10.jpg",
        recado: " - organizando tarefas"
    },
    {
        nome:"Aline Bastos",
        foto:"11.jpg",
        recado: " - concetrada"
    }
] 

async function PegarPost() {
    const resposta = await fetch(endpoint)
    const dados = await resposta.json()
    //console.log(dados)
    aguarde.style.display = 'none'
    //Fetch para adquirir os 100 posts da API
    dados.filter((post)=> post.id <= 11).map((post)=>{
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
        //Fim-----------------------------------------------

        //Criação de Fotos de Perfil
        const divPerfil = document.createElement('div')
        divPerfil.classList.add('divPerfil')

        const img = document.createElement('img')
        img.classList.add('imagemPerfil')
        img.setAttribute('src',`imagens/${Perfil[post.id-1].foto}`)

        const nomePerfil = document.createElement('h4')
        nomePerfil.innerText = Perfil[post.id-1].nome

        const recado = document.createElement('p')
        recado.innerText = Perfil[post.id-1].recado

        //É legal utilizar objetos!
        
        //console.log(post.id)
        //Parece complexo utilizar o post.id mais acredito ser um bom reaproveitamento de variavel/Parâmetro
        divPerfil.appendChild(img)
        divPerfil.appendChild(nomePerfil)
        divPerfil.appendChild(recado)
  

        //Criação de curtidas
        const menuInteracao = document.createElement('div')
        const curtida =  document.createElement('span')
        const ncurtida = document.createElement('span')
        const iconCurtida = document.createElement('i')
        iconCurtida.classList.add('bi','bi-balloon-heart')
        iconCurtida.classList.add('iconInteracao')        
        
        ncurtida.innerText = Math.floor(Math.random() * 11)
        curtida.appendChild(iconCurtida)
        curtida.appendChild(ncurtida)
        menuInteracao.appendChild(curtida)
        
        iconCurtida.addEventListener('click', () => {
            if(iconCurtida.classList.contains('bi-balloon-heart')){
                ncurtida.innerText++
                iconCurtida.classList.remove('bi-balloon-heart')
                iconCurtida.classList.add('bi-balloon-heart-fill')
                
            }else{
                ncurtida.innerText--
                iconCurtida.classList.remove('bi-balloon-heart-fill')
                iconCurtida.classList.add('bi-balloon-heart')
            }
        })
        //Criação de Compartilhamento
        const compartilhar =  document.createElement('span')
        const ncompartilhar = document.createElement('span')
        const iconCompartilhar = document.createElement('i')
        iconCompartilhar.classList.add('bi' ,'bi-share')
        iconCompartilhar.classList.add('iconInteracao')

        ncompartilhar.innerText = Math.floor(Math.random() * 11)
        compartilhar.appendChild(iconCompartilhar)
        compartilhar.appendChild(ncompartilhar)
        menuInteracao.appendChild(compartilhar)
        
        iconCompartilhar.addEventListener('click', () => {
            if(iconCompartilhar.classList.contains('bi-share')){
                ncompartilhar.innerText++
                iconCompartilhar.classList.remove('bi-share')
                iconCompartilhar.classList.add('bi-share-fill')
            }else{
                ncompartilhar.innerText--
                iconCompartilhar.classList.remove('bi-share-fill')
                iconCompartilhar.classList.add('bi-share')
            }
            
        })
        //Pinagem de conteúdo
        
        div.appendChild(divPerfil)
        div.appendChild(titulo)
        div.appendChild(corpoPost)
        div.appendChild(link)
        div.appendChild(menuInteracao)
        main.appendChild(div)
        //Pinagem dos  elementos filhos aos elementos pais
        
    })
    
}



PegarPost()