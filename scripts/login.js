
const main = document.querySelector('main')
const aguarde = document.getElementById('aguarde')


import{body,item} from "./tema.js"


window.addEventListener('load',()=>{
    if(item){
        body.classList.add('dark-mode')
    }else{
        body.classList.remove('dark-mode')
    }
})


function criarLogin() {
    main.innerHTML = ''
    const form = document.createElement('form')
    form.classList.add('formLogin')
    aguarde.style.display = 'none'


    const user = localStorage.getItem('user')
    const senha = localStorage.getItem('senha')

   // console.log(user)
   // console.log(senha)



    form.innerHTML = `
            <h1>Login</h1>
            <div>
            <label for="user">usuário</label>
            <input type="text" name="user" id="user" placeholder = "digite seu nome de usuário">
            </div>
            <div>
            <label for="senha">senha</label>
            <input type="password" name="senha" id="senha" minlength="8" maxlength="12" placeholder = "digite sua senha" required>
            </div>
            <p id="criarConta">Não tenho uma conta</p>
            <input type="submit" value="enviar" id="enviar">
            `
    main.appendChild(form)

    document.getElementById('criarConta').onclick = criarConta

    form.onsubmit = (e) =>{
        e.preventDefault()
        const usuario = document.getElementById('user')
        const senhaForm = document.getElementById('senha')

        if((usuario.value != user)|| (senhaForm.value != senha)){
            alert("usuário ou senha estão incorretos")
            form.reset()
        }else{
            alert('Login Realizado com sucesso!')
            form.reset()
            history.back()
        }

    }

}


function criarConta() {
    const form = document.querySelector('form')
    form.innerHTML =  `       
            <h1>Cadastro</h1>
            <div><input type="text" id="userC" placeholder="Crie seu usuário"></div>
            <div><input type="email" id="emailC" placeholder="Seu email"></div>
            <div><input type="password" id="senhaC" placeholder="Crie uma senha"></div>
            <input type= "submit" value="criar conta" id= "criar">
        `
    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        salvarDados()

        alert('Conta Criada Com Sucesso!')
    })
}

function salvarDados(){
    const user = document.getElementById('userC').value
    const email = document.getElementById('emailC').value
    const senha = document.getElementById('senhaC').value

    localStorage.setItem('user',user)
    localStorage.setItem('email',email)
    localStorage.setItem('senha',senha)

    criarLogin()
}




criarLogin()