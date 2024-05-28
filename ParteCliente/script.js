'use strict';
let datosUser;
function pintarHeader_login(){
    let header = document.createElement('div');
    header.id = 'header';
    
    
    let div_nav_header = document.createElement('div');
    div_nav_header.id = 'div_nav_header';
    
    let div_img = document.createElement('figure');
    
    let img  = document.createElement('img');
    img.src = './recursos/images/logo.png';
    img.addEventListener('click', function(){
       location.reload();
    });
    
    
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
};
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
};
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
    inputEmail_registro.id='email_registro';
    inputEmail_registro.type = 'email';
    
    let labelEmail_registro = document.createElement('label');
    labelEmail_registro.for = 'email_registro';
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
    button_registro.addEventListener('click', crear_usuario);

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
};
function reseteo_header_footer(){
    main.removeChild(document.getElementById('header'));
    main.removeChild(document.getElementById('footer'));
};
function borrar_login(){
    let main = document.getElementById('main');
    main.removeChild(document.getElementById('div_login'));
    reseteo_header_footer();
    pintar_inicio();
};
function crear_usuario(){

    event.preventDefault();

    const valores = {
            email: document.getElementById('email_registro').value,
            name: document.getElementById('user_registro').value,
            password: document.getElementById('password_registro').value
        }
        console.log('hola');
        
        const opciones = {
                method: 'POST',
                headers : {
                    'Content-type': 'application/json'
            },
                body: JSON.stringify(valores)
        }
        
        fetch('http://localhost:8000/auth/users/' , opciones)  
        .then(response => console.log(response.ok));  
    
};
function pintarHeader(){
    let header = document.createElement('div');
    header.id = 'header';
    
    
    let div_nav_header = document.createElement('div');
    div_nav_header.id = 'div_nav_header';
    
    
    let div_img = document.createElement('figure');
    
    div_img.style.margin = '0 10%';

    let img  = document.createElement('img');
    img.src = './recursos/images/logo.png';
    img.addEventListener('click', function(){
      location.reload()
    });
    
    // div con el h2 + el icono el perfil

    let ul_h2_icono = document.createElement('ul');
    ul_h2_icono.id = 'h2_icono';

    let log_out = document.createElement('li')
    let li_h2 = document.createElement('li');
    let li_icono = document.createElement('li');

    ul_h2_icono.appendChild(log_out);
    ul_h2_icono.appendChild(li_h2);
    ul_h2_icono.appendChild(li_icono);

    let log_out_text = document.createElement('h2');
    log_out_text.textContent = 'Desconectar';
    log_out_text.id = 'h2_log_out';
    log_out_text.addEventListener('click', function(){
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        reseteo_header_footer();
        if(document.getElementById('fondo_inicio')){
            document.getElementById('main').removeChild(document.getElementById('fondo_inicio'));
        }
        if(document.getElementById('fondo_form_post')){
            document.getElementById('main').removeChild(document.getElementById('fondo_form_post'));
        }
        pintarHeader_login();
        pintar_login();
        pintarFooter();
    })

    let h2_header = document.createElement('h2');
    h2_header.textContent = 'Mi perfil';
    h2_header.id = 'h2_header';
    h2_header.addEventListener('click', pintar_perfil);

    log_out.appendChild(log_out_text);
    li_h2.appendChild(h2_header);
    
    let icono_perfil = document.createElement('i');
    icono_perfil.className = 'fas fa-user profile-icon'

    li_icono.appendChild(icono_perfil);

    div_img.appendChild(img);
    div_nav_header.appendChild(div_img);
    div_nav_header.appendChild(ul_h2_icono);
    header.appendChild(div_nav_header);
    
    document.getElementById('main').appendChild(header);
};
function recoger_postlist(){
    let opciones = {
        method: 'GET',
        headers: {
            'Authorization': 'JWT ' + localStorage.getItem('access_token')
        }
    };

    fetch('http://localhost:8000/api/post_list/', opciones)
        .then(response => {
            return response.json();
        })
        .then(data => {
            let i = 0;
            data.forEach(post => {
                console.log(post);
                let h2_post = document.createElement('h2');
                h2_post.textContent = post.titulo;

                let desc_post = document.createElement('p');
                desc_post.textContent = post.descripcion;
                desc_post.id = 'parrafo' + i;
                i++;

                let num_jugadores = document.createElement('p');
                num_jugadores.textContent = 'Número de jugadores: '+ post.numero_jugadores;
                num_jugadores.id = 'parrafo' + i;
                i++;

                let user_creador = document.createElement('p');
                user_creador.textContent = post.usuario_creador_name;
                user_creador.id = 'parrafo' + i;
                i++;

                let fecha_post = document.createElement('p');
                fecha_post.textContent = 'Fecha de creación: ' + post.fecha.split('T')[0];
                fecha_post.id = 'parrafo' + i;

                let div_bajo_post = document.createElement('div');
                div_bajo_post.id = 'div_bajo_post';

                i = 0;
                let div_post = document.createElement('div');
                div_post.className = 'div_post';
                
                div_post.appendChild(h2_post);
                div_post.appendChild(user_creador);
                div_post.appendChild(desc_post);
                div_bajo_post.appendChild(num_jugadores);
                div_bajo_post.appendChild(fecha_post);
                div_post.appendChild(div_bajo_post);
                document.getElementById('listado_posts').appendChild(div_post);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
};
function detalle_post(){

};
function pintar_inicio() {

datosUser = recoger_datos_usuario();

pintarHeader();

    let div_fondo_inicio = document.createElement('div');
    div_fondo_inicio.id = 'fondo_inicio';

    let div_inicio = document.createElement('div');
    div_inicio.id = 'div_inicio';

    let h1_search = document.createElement('h1');
    h1_search.textContent = 'Buscador de partidas';
    h1_search.id = 'h1_search';

    let div_filtros = document.createElement('div');
    div_filtros.id = 'div_filtros';

    let filtro1 = document.createElement('select');
    filtro1.id = 'filtro1';
    let filtro1_sinSeleccionar = document.createElement('option');
    filtro1_sinSeleccionar.textContent = 'Elige dificultad';
    let filtro1_opcion1 = document.createElement('option');
    filtro1_opcion1.textContent = 'Principiante';
    let filtro1_opcion2 = document.createElement('option');
    filtro1_opcion2.textContent = 'Casual';
    let filtro1_opcion3 = document.createElement('option');
    filtro1_opcion3.textContent = 'Intermedio';
    let filtro1_opcion4 = document.createElement('option');
    filtro1_opcion4.textContent = 'Avanzado';

    filtro1.appendChild(filtro1_sinSeleccionar);
    filtro1.appendChild(filtro1_opcion1);
    filtro1.appendChild(filtro1_opcion2);
    filtro1.appendChild(filtro1_opcion3);
    filtro1.appendChild(filtro1_opcion4);

    let filtro2 = document.createElement('select');
    filtro2.id = 'filtro2';
    let filtro2_sinSeleccionar = document.createElement('option');
    filtro2_sinSeleccionar.textContent = 'Tipo de juego';
    let filtro2_opcion1 = document.createElement('option');
    filtro2_opcion1.textContent = 'Juego de cartas';
    let filtro2_opcion2 = document.createElement('option');
    filtro2_opcion2.textContent = 'Juego de rol standard';
    let filtro2_opcion3 = document.createElement('option');
    filtro2_opcion3.textContent = 'Juego de mesa';

    filtro2.appendChild(filtro2_sinSeleccionar);
    filtro2.appendChild(filtro2_opcion1);
    filtro2.appendChild(filtro2_opcion2);
    filtro2.appendChild(filtro2_opcion3);

    let botonera = document.createElement('div');
    botonera.id = 'botonera';

    let boton_search = document.createElement('button');
    boton_search.id = 'boton_search';
    boton_search.textContent = 'Buscar';

    let boton_crear_post = document.createElement('button');
    boton_crear_post.id = 'crear_post';
    boton_crear_post.textContent = 'Crear nuevo Post';
    boton_crear_post.addEventListener('click', pintar_form_posts);

    let div_listado_posts = document.createElement('div');
    div_listado_posts.id = 'listado_posts';

    div_inicio.appendChild(h1_search);
    div_filtros.appendChild(filtro1);
    div_filtros.appendChild(filtro2);
    div_inicio.appendChild(div_filtros);
    botonera.appendChild(boton_search);
    botonera.appendChild(boton_crear_post);
    div_inicio.appendChild(botonera);
    div_inicio.appendChild(div_listado_posts);

    recoger_postlist();

    div_fondo_inicio.appendChild(div_inicio);


    document.getElementById('main').appendChild(div_fondo_inicio);


pintarFooter();
};
function pintar_perfil(){


    console.log(datosUser);

    reseteo_header_footer();

    if(document.getElementById('fondo_inicio')){
        document.getElementById('main').removeChild(document.getElementById('fondo_inicio'));
    }

    pintarHeader();

    let div_foto_perfil = document.createElement('div');
    div_foto_perfil.id = 'div_foto_perfil';

    let foto_perfil_default = document.createElement('img');
    foto_perfil_default.id = 'foto_perfil';
    foto_perfil_default.src = './recursos/images/perfil_default.png';

    let fondo_perfil = document.createElement('div');
    fondo_perfil.id = 'fondo_perfil';

    let div_perfil = document.createElement('div');
    div_perfil.id = 'div_perfil';

    let p_username = document.createElement('p');
    p_username.id = 'p_username';
    p_username.textContent = datosUser[2];

    let div_foto_datos = document.createElement('div');
    div_foto_datos.id = 'div_foto_datos';

    let div_datos = document.createElement('div');
    div_datos.id = 'div_datos';
    
    let p_num_post = document.createElement('p');
    p_num_post.id = 'p_num_post';
    p_num_post.textContent = 'Número de post creados: ' + datosUser[3];


    let p_fecha_creacion = document.createElement('p');
    p_fecha_creacion.id = 'p_fecha_creacion';
    p_fecha_creacion.textContent = 'Fecha de registro: ' + datosUser[4].split('T')[0];

    let email_perfil = document.createElement('p');
    email_perfil.id = 'email_perfil';
    email_perfil.textContent = datosUser[1];


    div_foto_datos.appendChild(div_foto_perfil);
    div_foto_datos.appendChild(div_datos);
    div_foto_perfil.appendChild(foto_perfil_default);
    div_datos.appendChild(p_username);
    div_datos.appendChild(p_fecha_creacion);
    div_datos.appendChild(p_num_post);
    div_datos.appendChild(email_perfil);


    let div_botonera_perfil = document.createElement('div');
    div_botonera_perfil.id = 'div_botonera_perfil';

    let boton_descripcion = document.createElement('button');
    boton_descripcion.id = 'boton_descripcion';
    boton_descripcion.textContent = 'Editar descripcion';
    boton_descripcion.addEventListener('click', function(){
        if(text_area_descripcion.hasAttribute('readonly')){
            text_area_descripcion.removeAttribute('readonly');
            boton_descripcion.textContent = 'Guardar descripcion';
        } else {
            text_area_descripcion.readOnly = true;

            actualizar_descripcion_perfil(datosUser[0], text_area_descripcion.value);

        }
    })

    let boton_partidas = document.createElement('button');
    boton_partidas.id = 'boton_partidas';
    boton_partidas.textContent = 'administrar partidas';

    let div_descripcion = document.createElement('div');
    div_descripcion.id = 'div_descripcion';
    
    let text_area_descripcion = document.createElement('textarea');
    if(datosUser[5] == null){
        text_area_descripcion.textContent = 'Escribe la descripcion de tu perfil';
    } else {
        text_area_descripcion.textContent = datosUser[5];
    }
    text_area_descripcion.id = 'text_area_descripcion';
    text_area_descripcion.readOnly = true;

    div_descripcion.appendChild(text_area_descripcion);

    div_botonera_perfil.appendChild(boton_descripcion);
    div_botonera_perfil.appendChild(boton_partidas);

    div_perfil.appendChild(div_foto_datos);
    div_perfil.appendChild(div_botonera_perfil);
    div_perfil.appendChild(div_descripcion);

    fondo_perfil.appendChild(div_perfil);

    document.getElementById('main').appendChild(fondo_perfil);

    pintarFooter();

};
function actualizar_descripcion_perfil(id_user_perfil, descripcion){

    event.preventDefault();

    const valores = {
            descripcion : descripcion
        }
        console.log('hola');
        
        const opciones = {
                method: 'PATCH',
                headers : {
                    'Content-type': 'application/json'
            },
                body: JSON.stringify(valores)
        }
        
        fetch('http://localhost:8000/api/perfil_detail/'+id_user_perfil+'/'  , opciones)  
        .then(response => console.log(response.status));   
};
function recoger_datos_usuario() {

    let arrayDatosUser = [];


    let opciones = {
        method: 'GET',
        headers: {
            'Authorization': 'JWT ' + localStorage.getItem('access_token')
        }
    };

    fetch('http://localhost:8000/auth/users/me/', opciones)
        .then(response => {
            return response.json();
        })
        .then(data => {
        console.log(data);
            arrayDatosUser.push(data.id);
            arrayDatosUser.push(data.email);
            arrayDatosUser.push(data.name);
            arrayDatosUser.push(data.post_por_user);
            arrayDatosUser.push(data.create_date);
            arrayDatosUser.push(data.descripcion_perfil);
        })
        .catch(error => {
            console.error('Error:', error);
        });

    return arrayDatosUser;
};
function pintar_form_posts(){

    reseteo_header_footer();

    pintarHeader();

    document.getElementById('main').removeChild(document.getElementById('fondo_inicio'));

    let fondo_form_post = document.createElement('div');
    fondo_form_post.id = 'fondo_form_post';

    let div_form_post = document.createElement('div');
    div_form_post.id = 'div_form_post';

    let form_post = document.createElement('form');
    form_post.id = 'form_post';

    let h1_crear_post = document.createElement('h1');
    h1_crear_post.textContent = 'Creación de partida';

    let label_titulo_post = document.createElement('label');
    label_titulo_post.for = 'titulo_post';
    label_titulo_post.textContent = 'Titulo del Post';

    let titulo_post = document.createElement('input');
    titulo_post.type = 'text';
    titulo_post.id = 'titulo_post';

    let label_descr_post = document.createElement('label');
    label_descr_post.for = 'descr_post';
    label_descr_post.textContent = 'Descripción'

    let descr_post = document.createElement('textarea');
    descr_post.id = 'descr_post';

    let div_label_jugad = document.createElement('div');
    div_label_jugad.id = 'div_label_post';

    let label_jugad_post = document.createElement('label');
    label_jugad_post.for = 'jugad_post';
    label_jugad_post.textContent = 'Número de jugadores para la partida:';

    let jugad_post = document.createElement('input');
    jugad_post.id = 'jugad_post';
    jugad_post.type = 'number';

    let boton_crear_post = document.createElement('button');
    boton_crear_post.textContent = 'Crear';
    boton_crear_post.addEventListener('click', crear_post);

    form_post.appendChild(h1_crear_post);
    form_post.appendChild(label_titulo_post);
    form_post.appendChild(titulo_post);
    form_post.appendChild(label_descr_post);
    form_post.appendChild(descr_post);
    div_label_jugad.appendChild(label_jugad_post);
    div_label_jugad.appendChild(jugad_post);
    form_post.appendChild(div_label_jugad);
    form_post.appendChild(boton_crear_post);
    div_form_post.appendChild(form_post);
    
    fondo_form_post.appendChild(div_form_post);
    document.getElementById('main').appendChild(fondo_form_post);

    pintarFooter();
};
function crear_post(){

    event.preventDefault();

    const valores = {
            usuario_creador: datosUser[0],
            titulo: document.getElementById('titulo_post').value,
            descripcion: document.getElementById('descr_post').value,
            numero_jugadores: document.getElementById('jugad_post').value
        }
        console.log('hola');
        
        const opciones = {
                method: 'POST',
                headers : {
                    'Content-type': 'application/json'
            },
                body: JSON.stringify(valores)
        }
        
        fetch('http://localhost:8000/api/post_detail/' , opciones)  
        .then(response => console.log(response.status));  
};
function pintar_login(){
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
};
function login (){
        
    console.log()

    event.preventDefault();

    let opciones = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
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
            console.log(data);
            localStorage.setItem('access_token', data['access']);
            localStorage.setItem('refresh_roken', data['refresh']);
            
            console.log('Inicio de sesión exitoso');
            borrar_login()
            })
            .catch(error => {
            console.error('Error:', error);
            });
};
if(localStorage.getItem('access_token') == null){


    pintarHeader_login();

    pintar_login();  

    pintarFooter();

    

} else {
   
    pintar_inicio();
};

// DETALLE DE LOS POST 
            // --> BOTON UNIRSE A LA PARTIDA
            // --> ENVIO DE EMAIL A USUARIOS ACEPTADOS

// HEADER MI PERFIL
            // --> PANEL DE ADMINISTRACION DE PARTIDAS
            // --> PANEL DE LOGROS DESBLOQUEADOS
