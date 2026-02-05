        const tema = document.getElementById('tema')
        const body = document.querySelector('body')
        let corTema = false
        const item = localStorage.getItem('tipoTema') == 'true'
      //  console.log(item)


        export{body,corTema,item}


        window.addEventListener('load',()=>{
            if(item){
                body.classList.add('dark-mode')
                if(tema){
                    tema.classList.remove('bi-moon-fill')
                    tema.classList.add('bi-sun-fill')
                }
            }else{
                body.classList.remove('dark-mode')
                if(tema){
                    tema.classList.remove('bi-sun-fill')
                    tema.classList.add('bi-moon-fill')
                }
            }
        })

    if(tema){
        tema.addEventListener('click',()=>{
            if(tema.classList.contains('bi-moon-fill')){
                tema.classList.remove("bi-moon-fill")
                tema.classList.add("bi-sun-fill")
                body.classList.add("dark-mode")
                corTema = true
            }else{
                tema.classList.remove("bi-sun-fill")
                tema.classList.add("bi-moon-fill")
                body.classList.remove("dark-mode")
                corTema = false
            }
            localStorage.setItem('tipoTema',corTema)
        })
    }