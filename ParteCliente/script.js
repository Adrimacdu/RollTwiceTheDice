'use strict';
// HEADER LOGIN
function pintarHeader_login(){
    let header = document.createElement('div');
    header.id = 'header';
    
    
    let div_nav_header = document.createElement('div');
    div_nav_header.id = 'div_nav_header';
    
    
    let div_img = document.createElement('figure');
    
    let img  = document.createElement('img');
    img.src = './recursos/images/logo.png';
    
    
    let h2_header = document.createElement('h2');
    h2_header.textContent = 'Regístrate';
    h2_header.id = 'h2_header';

    //Registro Usuarios Header
    h2_header.addEventListener('click', pintar_registro);
    
    div_img.appendChild(img);
    div_nav_header.appendChild(div_img);
    div_nav_header.appendChild(h2_header);
    header.appendChild(div_nav_header);
    
    document.getElementById('main').appendChild(header);
}
//FOOTER LOGIN
function pintarFooter(){
    let footer = document.createElement('div');
    footer.id = 'footer';
    
    let div_nav_footer = document.createElement('div');
    div_nav_footer.id = 'div_nav_footer';
    
    let copyright_footer = document.createElement('h2');
    copyright_footer.id = 'copyright_footer';
    copyright_footer.textContent = 'Copyright ©';
    
    let politicas_cookies = document.createElement('h2');
    politicas_cookies.id = 'politicas_footer';
    politicas_cookies.textContent = 'Políticas de cookies';
    
    let sobre_nosotros = document.createElement('h2');
    sobre_nosotros.id = 'sobre_nosotros_footer';
    sobre_nosotros.textContent = 'Sobre nosotros';
    
    div_nav_footer.appendChild(copyright_footer);
    div_nav_footer.appendChild(politicas_cookies);
    div_nav_footer.appendChild(sobre_nosotros);
    
    footer.appendChild(div_nav_footer);
    document.getElementById('main').appendChild(footer);
}
// FORMULARIO LOGIN

pintarHeader_login();

    let login_div = document.createElement('div');
    login_div.id = 'div_login';
    
    let form_div = document.createElement('div');
    form_div.id = 'div_form_login';
    
    let form_login = document.createElement('form');
    form_login.id = 'form_login';
    
    let h1_login = document.createElement('h1');
    h1_login.textContent = 'LOGIN';
    
    let inputEmail = document.createElement('input');
    inputEmail.id='email';
    inputEmail.type = 'email';
    
    let labelEmail = document.createElement('label');
    labelEmail.for = 'email';
    labelEmail.textContent = 'Email';
    
    let inputPassword = document.createElement('input');
    inputPassword.id='password';
    inputPassword.type = 'password';
    
    let labelPassword = document.createElement('label');
    labelPassword.for = 'password';
    labelPassword.textContent = 'Password';
    
    let button_login = document.createElement('button')
    button_login.textContent = 'Iniciar Sesión';
    button_login.addEventListener('click',login);
    form_div.appendChild(h1_login);
    form_login.appendChild(labelEmail);
    form_login.appendChild(inputEmail);
    form_login.appendChild(labelPassword);
    form_login.appendChild(inputPassword);
    form_login.appendChild(button_login)
    form_div.appendChild(form_login);
    login_div.appendChild(form_div);
    
    document.getElementById('main').appendChild(login_div);

pintarFooter();

function borrar_login(){
    let main = document.getElementById('main');
    main.removeChild(document.getElementById('div_login'));
    main.removeChild(document.getElementById('header'));
    main.removeChild(document.getElementById('footer'));
    pintar_inicio();
}
function pintar_registro(){

        event.preventDefault();

        let main = document.getElementById('main');

        main.removeChild(document.getElementById('div_login'));
        main.removeChild(document.getElementById('footer'));
        
        let login_div = document.createElement('div');
        login_div.id = 'div_login';
        
        let form_div = document.createElement('div');
        form_div.id = 'div_form_login';
        
        let form_registro = document.createElement('form');
        form_registro.id = 'form_login';

        let h1_registro = document.createElement('h1');
        h1_registro.textContent = 'Formulario de Registro';
        
        let inputEmail_registro = document.createElement('input');
        inputEmail_registro.id='email';
        inputEmail_registro.type = 'email';
        
        let labelEmail_registro = document.createElement('label');
        labelEmail_registro.for = 'email';
        labelEmail_registro.textContent = 'Email';

        let inputPassword_registro = document.createElement('input');
        inputPassword_registro.id='password_registro';
        inputPassword_registro.type = 'text';
        
        let labelPassword_registro = document.createElement('label');
        labelPassword_registro.for = 'password_registro';
        labelPassword_registro.textContent = 'Password';

        let inputUser_registro = document.createElement('input');
        inputUser_registro.id='user_registro';
        inputUser_registro.type = 'text';
        
        let labelUser_registro = document.createElement('label');
        labelUser_registro.for = 'user_registro';
        labelUser_registro.textContent = 'Nombre de usuario';

        let button_registro = document.createElement('button')
        button_registro.textContent = 'Registrarme';


        form_registro.appendChild(h1_registro);
        form_registro.appendChild(labelEmail_registro);
        form_registro.appendChild(inputEmail_registro);
        form_registro.appendChild(labelUser_registro);
        form_registro.appendChild(inputUser_registro);
        form_registro.appendChild(labelPassword_registro);
        form_registro.appendChild(inputPassword_registro);
        form_registro.appendChild(button_registro);

        form_div.appendChild(form_registro);
        login_div.appendChild(form_div);
        main.appendChild(login_div);

        pintarFooter();
}
function crear_usuario(){
    
}
function pintarHeader(){
    let header = document.createElement('div');
    header.id = 'header';
    
    
    let div_nav_header = document.createElement('div');
    div_nav_header.id = 'div_nav_header';
    
    
    let div_img = document.createElement('figure');
    
    div_img.style.margin = '0 10%';
    
    let img  = document.createElement('img');
    img.src = './recursos/images/logo.png';
    
    // div con el h2 + el icono el perfil

    let ul_h2_icono = document.createElement('ul');
    ul_h2_icono.id = 'h2_icono';

    let li_h2 = document.createElement('li');
    let li_icono = document.createElement('li');

    ul_h2_icono.appendChild(li_h2);
    ul_h2_icono.appendChild(li_icono);

    let h2_header = document.createElement('h2');
    h2_header.textContent = 'Mi perfil';
    h2_header.id = 'h2_header';

    li_h2.appendChild(h2_header);
    
    let icono_perfil = document.createElement('i');
    icono_perfil.className = 'fas fa-user profile-icon'

    li_icono.appendChild(icono_perfil);

    div_img.appendChild(img);
    div_nav_header.appendChild(div_img);
    div_nav_header.appendChild(ul_h2_icono);
    header.appendChild(div_nav_header);
    
    document.getElementById('main').appendChild(header);
}
function pintar_inicio() {
 pintarHeader();
 let h1 = document.createElement('h1');
 h1.textContent = 'VAYA TELA CHAVAL';

 document.getElementById('main').appendChild(h1);
 pintarFooter();
}
function login (){
    
    event.preventDefault();

    let opciones = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: inputEmail.value,
            password: inputPassword.value
        })
    };

fetch('http://localhost:8000/api/auth/jwt/create/', opciones)
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            console.log(response);
        }
        })
        .then(data => {        
        localStorage.setItem('access_token', data['access']);
        localStorage.setItem('refresh_roken', data['refresh']);
        
        console.log('Inicio de sesión exitoso');
        borrar_login()
        })
        .catch(error => {
        console.error('Error:', error);
        });
};
// PINTAR PAGINA DE INICIO TRAS EL LOGIN Y MODIFICAR HEADER DESDE LA FUNCION BORRAR_LOGIN(O BIEN BORRAR HEADER Y CREARLO NUEVO CON OTRA FUNCION)
// AGREGAR FORMULARIO DE REGISTRO AL CLICKAR EN EL HEADER "REGISTRATE"
