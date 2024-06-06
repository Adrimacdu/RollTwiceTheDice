'use strict';
let datosUser;
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
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


    let main = document.getElementById('main');

    if(document.getElementById('div_login')){
        main.removeChild(document.getElementById('div_login'));
    }

    if(document.getElementById('div_landing')){
        main.removeChild(document.getElementById('div_landing'));
    }

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
    button_registro.type = 'button';
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

        fetch('https://api.rolltwicethedice.es/auth/users/' , opciones)  
        .then(response => {
            if(response.ok){
                location.reload();
            }
        });

        
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
      location.reload();
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
        };
        if(document.getElementById('fondo_detalle_post')){
            document.getElementById('main').removeChild(document.getElementById('fondo_detalle_post'));
        };
        if(document.getElementById('fondo_perfil')){
            document.getElementById('main').removeChild(document.getElementById('fondo_perfil'));
        };
        if(document.getElementById('fondo_form_post')){
            document.getElementById('main').removeChild(document.getElementById('fondo_form_post'));
        };
        if(document.getElementById('fondo_admin')){
            document.getElementById('main').removeChild(document.getElementById('fondo_admin'));
        };
        if(document.getElementById('fondo_lista_jugadores')){
            document.getElementById('main').removeChild(document.getElementById('fondo_lista_jugadores'));
        };
        if(document.getElementById('fondo_panel_admin')){
            document.getElementById('main').removeChild(document.getElementById('fondo_panel_admin'));
        };
        if(document.getElementById('fondo_user_list')){
            document.getElementById('main').removeChild(document.getElementById('fondo_user_list'));
        };
        if(document.getElementById('fondo_post_list')){
            document.getElementById('main').removeChild(document.getElementById('fondo_post_list'));
        };
        if(document.getElementById('fondo_form_actualizar_post')){
            document.getElementById('main').removeChild(document.getElementById('fondo_form_actualizar_post'));
        };
        if(document.getElementById('div_login')){
            document.getElementById('main').removeChild(document.getElementById('div_login'));
        };
        if(document.getElementById('fondo_form_actualizar_user')){
            document.getElementById('main').removeChild(document.getElementById('fondo_form_actualizar_user'));
        };
        
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
    icono_perfil.className = 'fas fa-user profile-icon';

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

    fetch('https://api.rolltwicethedice.es/api/post_list/', opciones)
        .then(response => {
            return response.json();
        })
        .then(data => {
            let i = 0;
            data.forEach(post => {
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
                div_post.id = post.id;
                div_post.addEventListener('click', detalle_post);
                
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

    console.log(datosUser[0])

    reseteo_header_footer();
    document.getElementById('main').removeChild(document.getElementById('fondo_inicio'));

    let id_post_detail = this.id;

    let opciones = {
        method: 'GET',
        headers: {
            'Authorization': 'JWT ' + localStorage.getItem('access_token')
        }
    };
pintarHeader();
    fetch('https://api.rolltwicethedice.es/api/post_detail/'+ id_post_detail+'/', opciones)
        .then(response => {
            return response.json();
        })
        .then(data => {

            console.log(data);
        let i = 0;
               
        let h2_post = document.createElement('h2');
        h2_post.textContent = data.titulo;

        let desc_post = document.createElement('p');
        desc_post.textContent = data.descripcion;
        desc_post.id = 'parrafo' + i;
        i++;

        let num_jugadores = document.createElement('p');
        num_jugadores.textContent = 'Número de jugadores: '+ data.numero_jugadores;
        num_jugadores.id = 'parrafo' + i;
        i++;

        let user_creador = document.createElement('p');
        user_creador.textContent = data.usuario_creador_name;
        user_creador.id = 'parrafo' + i;
        i++;

        let fecha_post = document.createElement('p');
        fecha_post.textContent = 'Fecha de creación: ' + data.fecha.split('T')[0];
        fecha_post.id = 'parrafo' + i;

        let div_bajo_post = document.createElement('div');
        div_bajo_post.id = 'div_bajo_post';

        i = 0;
        
        let fondo_detalle_post = document.createElement('div');
        fondo_detalle_post.id = 'fondo_detalle_post';

        let div_post_detail = document.createElement('div');
        div_post_detail.className = 'div_post_detail';

        let boton_unirse_partida = document.createElement('button');
        boton_unirse_partida.id = 'boton_unirse';
        boton_unirse_partida.textContent = 'Unirte a la aventura';
        boton_unirse_partida.addEventListener('click', function(){

            unirse_partida(data.usuario_creador, datosUser[0], data.partida_del_post);

        })
        
        div_post_detail.appendChild(h2_post);
        div_post_detail.appendChild(user_creador);
        div_post_detail.appendChild(desc_post);
        div_bajo_post.appendChild(num_jugadores);
        div_bajo_post.appendChild(boton_unirse_partida);
        div_bajo_post.appendChild(fecha_post);
        div_post_detail.appendChild(div_bajo_post);
        fondo_detalle_post.appendChild(div_post_detail);
        document.getElementById('main').appendChild(fondo_detalle_post);

       
pintarFooter();
        })
        .catch(error => {
            console.error('Error:', error);
        });

};
function unirse_partida(usuario_creador, usuario_jugador, partida_unir){

    if(usuario_jugador == usuario_creador){
        return alert('El usuario creador del post no puede unirse a su propia partida')
    } else {
       
    const valores = {
            usuario: usuario_jugador,
            partida: partida_unir,
        }
        console.log('hola');
        
        const opciones = {
                method: 'POST',
                headers : {
                    'Content-type': 'application/json',
                    'Authorization': 'JWT ' + localStorage.getItem('access_token')
            },
                body: JSON.stringify(valores)
        }
        
        fetch('https://api.rolltwicethedice.es/api/jugador_detail/' , opciones)  
        .then(response => {
        if(response.ok){
            console.log(response.status)
        } else {
            return alert('YA ESTAS UNIDO A LA PARTIDA')
        }
            })
        .catch(error => {
            console.error('Error:', error);
        });;  
    }
};
function pintar_inicio(){

datosUser = recoger_datos_usuario();
console.log(datosUser);

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

        reseteo_header_footer();



        if(document.getElementById('fondo_inicio')){
            document.getElementById('main').removeChild(document.getElementById('fondo_inicio'));
        };
        if(document.getElementById('fondo_detalle_post')){
            document.getElementById('main').removeChild(document.getElementById('fondo_detalle_post'));
        };
        if(document.getElementById('fondo_perfil')){
            document.getElementById('main').removeChild(document.getElementById('fondo_perfil'));
        };
        if(document.getElementById('fondo_form_post')){
            document.getElementById('main').removeChild(document.getElementById('fondo_form_post'));
        };
        if(document.getElementById('fondo_admin')){
            document.getElementById('main').removeChild(document.getElementById('fondo_admin'));
        };
        if(document.getElementById('fondo_lista_jugadores')){
            document.getElementById('main').removeChild(document.getElementById('fondo_lista_jugadores'));
        };
        if(document.getElementById('fondo_panel_admin')){
            document.getElementById('main').removeChild(document.getElementById('fondo_panel_admin'));
        };
        if(document.getElementById('fondo_user_list')){
            document.getElementById('main').removeChild(document.getElementById('fondo_user_list'));
        };
        if(document.getElementById('fondo_post_list')){
            document.getElementById('main').removeChild(document.getElementById('fondo_post_list'));
        };
        if(document.getElementById('fondo_form_actualizar_post')){
            document.getElementById('main').removeChild(document.getElementById('fondo_form_actualizar_post'));
        };
        if(document.getElementById('div_login')){
            document.getElementById('main').removeChild(document.getElementById('div_login'));
        };
        if(document.getElementById('fondo_form_actualizar_user')){
            document.getElementById('main').removeChild(document.getElementById('fondo_form_actualizar_user'));
        };
        
        
        
        pintarHeader();

        if(!datosUser[6]){

        

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
            };
        });

        let boton_partidas = document.createElement('button');
        boton_partidas.id = 'boton_partidas';
        boton_partidas.textContent = 'administrar partidas';
        boton_partidas.addEventListener('click', recoger_partidas);

        let div_descripcion = document.createElement('div');
        div_descripcion.id = 'div_descripcion';
        
        let text_area_descripcion = document.createElement('textarea');
        if(datosUser[5] == null){
            text_area_descripcion.textContent = 'Escribe la descripcion de tu perfil';
        } else {
            text_area_descripcion.textContent = datosUser[5];
        };
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
        
    }else if(datosUser[6]){

        let fondo_panel_admin = document.createElement('div');
        fondo_panel_admin.id = 'fondo_panel_admin';

        let div_panel_admin = document.createElement('div');
        div_panel_admin.id = 'div_panel_admin';

        let h2_panel_admin = document.createElement('h2')
        h2_panel_admin.textContent = 'Panel de administracion';

        let listado_admin = document.createElement('div');
        listado_admin.id = 'listado_admin';


        div_panel_admin.appendChild(h2_panel_admin);
        div_panel_admin.appendChild(listado_admin);


        let div_listar_posts = document.createElement('div');
        div_listar_posts.textContent = 'Listado de Posts';
        div_listar_posts.style.background = 'white';
        div_listar_posts.style.color = 'black';
        div_listar_posts.addEventListener('click', admin_post_list);

        let div_listar_usuarios = document.createElement('div');
        div_listar_usuarios.textContent = 'Listado de Usuarios';
        div_listar_usuarios.style.background = 'grey';
        div_listar_usuarios.addEventListener('click', admin_user_list);

        listado_admin.appendChild(div_listar_posts);
        listado_admin.appendChild(div_listar_usuarios);


        fondo_panel_admin.appendChild(div_panel_admin);
        document.getElementById('main').appendChild(fondo_panel_admin);

    };

    

    pintarFooter();

};
function admin_user_list(){
    reseteo_header_footer();
    document.getElementById('main').removeChild(document.getElementById('fondo_panel_admin'));

    pintarHeader();

    let fondo_user_list = document.createElement('div');
    fondo_user_list.id = 'fondo_user_list';

    let div_user_list = document.createElement('div');
    div_user_list.id = 'div_user_list';

    let h2_user_list = document.createElement('h2')
    h2_user_list.textContent = 'Listado de Usuarios';

    let boton_crear_usuario_admin = document.createElement('button');
    boton_crear_usuario_admin.id = 'boton_crear_usuario_admin';
    boton_crear_usuario_admin.textContent = 'Crear user';
    boton_crear_usuario_admin.type = 'button';
    boton_crear_usuario_admin.addEventListener('click', form_crear_usuario_admin);

    let div_listado_admin_usuario = document.createElement('div');
    div_listado_admin_usuario.id = 'div_listado_admin_usuario';

    let opciones = {
        method: 'GET',
        headers: {
            'Authorization': 'JWT ' + localStorage.getItem('access_token')
        }
    };

    fetch('https://api.rolltwicethedice.es/api/user_list/', opciones)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data.length);
            console.log(data);
            let contador = 0;
            data.forEach(function(user){
                
                let div_detail_user = document.createElement('div');
                div_detail_user.id = 'div_detail_user';
                if(contador%2 == 0){
                    div_detail_user.style.background = 'grey';
                    div_detail_user.style.color = 'white';
                } else {
                    div_detail_user.style.background = 'white';
                    div_detail_user.style.color = 'black';
                };
                contador++;
                let p_texto_user = document.createElement('p');
                p_texto_user.textContent = "Username: " + user.name + " - Email: " + user.email + " - Fecha: " + user.create_date.split('T')[0];

                let botonera_list_user = document.createElement('div');
                botonera_list_user.id = 'botonera_list_user';

                let boton_actualizar_user = document.createElement('button');
                boton_actualizar_user.textContent = 'Actualizar';
                boton_actualizar_user.id = user.id;
                boton_actualizar_user.addEventListener('click', function(){
                    form_actualizar_user(user.id, user.name, user.email, user.password);
                });
                

                let boton_borrar_user = document.createElement('button');
                boton_borrar_user.textContent = 'Borrar';
                boton_borrar_user.id = user.id;
                boton_borrar_user.addEventListener('click', function(){
                    borrar_user(user.id);
                });

                botonera_list_user.appendChild(boton_borrar_user);
                botonera_list_user.appendChild(boton_actualizar_user);

                div_detail_user.appendChild(p_texto_user);
                div_detail_user.appendChild(botonera_list_user);
                div_listado_admin_usuario.appendChild(div_detail_user);
                
            });
        })
        .catch(error => console.log('Error: ' + error));

    

    
    div_user_list.appendChild(h2_user_list);
    div_user_list.appendChild(boton_crear_usuario_admin);
    div_user_list.appendChild(div_listado_admin_usuario);


    fondo_user_list.appendChild(div_user_list);
    document.getElementById('main').appendChild(fondo_user_list);

    pintarFooter();
};
function borrar_user(user_id){
    let opciones = {
        method: 'DELETE',
        headers: {
            'Authorization': 'JWT ' + localStorage.getItem('access_token')
        }
    };

    fetch('https://api.rolltwicethedice.es/api/user_detail/'+ user_id +'/', opciones)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.error('Error:', error);
        });
};
function form_actualizar_user(id_user, username, email, password){


    reseteo_header_footer();
    document.getElementById('main').removeChild(document.getElementById('fondo_user_list'));

    pintarHeader();

    let fondo_form_actualizar_user = document.createElement('div');
    fondo_form_actualizar_user.id = 'fondo_form_actualizar_user';

    let div_form_actualizar_user = document.createElement('div');
    div_form_actualizar_user.id = 'div_form_actualizar_user';

    let h2_actualizar_user = document.createElement('h2');
    h2_actualizar_user.textContent = 'Actualizar user';

    let form_actualizar_user = document.createElement('form');
    form_actualizar_user.id = 'form_actualizar_user';

    let label_user = document.createElement('label');
    label_user.for = 'form_act_username';
    label_user.textContent = 'Username:';

    let input_user = document.createElement('input');
    input_user.value = username;
    input_user.id = 'form_act_user';

    let label_email = document.createElement('label');
    label_email.for = 'form_act_email';
    label_email.textContent = 'Email:';

    let input_email = document.createElement('input');
    input_email.id = 'form_act_email';
    input_email.value = email;

    let label_password = document.createElement('label');
    label_password.for = 'form_act_password';
    label_password.textContent = 'Password:';

    let input_password = document.createElement('input');
    input_password.placeholder= "*****************";
    input_password.id = 'form_act_password';

    let boton_actualizar_user = document.createElement('button');
    boton_actualizar_user.textContent = 'Actualizar';
    boton_actualizar_user.type = 'button';
    boton_actualizar_user.addEventListener('click', function(){
        if(input_password.value == ''){
            actualizar_user(id_user, input_user.value, input_email.value, password);
        } else {
            actualizar_user(id_user, input_user.value, input_email.value, input_password.value);
        }
    })
    

    form_actualizar_user.appendChild(label_user);
    form_actualizar_user.appendChild(input_user);
    form_actualizar_user.appendChild(label_email);
    form_actualizar_user.appendChild(input_email);
    form_actualizar_user.appendChild(label_password);
    form_actualizar_user.appendChild(input_password);
    form_actualizar_user.appendChild(boton_actualizar_user);

    div_form_actualizar_user.appendChild(h2_actualizar_user);
    div_form_actualizar_user.appendChild(form_actualizar_user);

    fondo_form_actualizar_user.appendChild(div_form_actualizar_user);
    document.getElementById('main').appendChild(fondo_form_actualizar_user);
    pintarFooter();
};
function actualizar_user(id_user, username, email, password){


    const valores = {
        user_id: id_user,
        new_password: password,
        re_new_password: password,
        name: username,
        email: email
    };
    
    const opciones = {
            method: 'PATCH',
            headers : {
                'Content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('access_token')
        },
            body: JSON.stringify(valores)
    };
    
    fetch('https://api.rolltwicethedice.es/auth/admin/set_user/' , opciones)  
    .then(response => console.log(response.status))
    .catch(error => {
        console.error('Error:', error);
    });
};
function form_crear_usuario_admin(){
    let main = document.getElementById('main');

    if(document.getElementById('fondo_user_list')){
        main.removeChild(document.getElementById('fondo_user_list'));
    }

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
    button_registro.type = 'button'
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
function admin_post_list(){
    reseteo_header_footer();
    document.getElementById('main').removeChild(document.getElementById('fondo_panel_admin'));

    pintarHeader();

    let fondo_post_list = document.createElement('div');
    fondo_post_list.id = 'fondo_post_list';

    let div_post_list = document.createElement('div');
    div_post_list.id = 'div_post_list';

    let h2_post_list = document.createElement('h2')
    h2_post_list.textContent = 'Listado de Posts';

    let boton_crear_post_admin = document.createElement('button');
    boton_crear_post_admin.id = 'boton_crear_post_admin';
    boton_crear_post_admin.textContent = 'Crear Post';
    boton_crear_post_admin.addEventListener('click', form_crear_post_admin);

    let div_listado_admin_post = document.createElement('div');
    div_listado_admin_post.id = 'div_listado_admin_post';

    let opciones = {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'JWT ' + localStorage.getItem('access_token')
        }
    };

    fetch('https://api.rolltwicethedice.es/api/post_list/', opciones)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data.length);
            console.log(data);
            data.forEach(function(post){
                
                let div_detail_post = document.createElement('div');
                div_detail_post.id = 'div_detail_post';
                if(post.id%2 == 0){
                    div_detail_post.style.background = 'grey';
                    div_detail_post.style.color = 'white';
                } else {
                    div_detail_post.style.background = 'white';
                    div_detail_post.style.color = 'black';
                };
                let p_texto_post = document.createElement('p');
                p_texto_post.textContent = "Título: " + post.titulo + " - Creador: " + post.usuario_creador_name + " - NºJugadores: " + post.numero_jugadores  + " - Fecha: " + post.fecha.split('T')[0];

                let botonera_list_posts = document.createElement('div');
                botonera_list_posts.id = 'botonera_list_posts';

                let boton_actualizar_post = document.createElement('button');
                boton_actualizar_post.textContent = 'Actualizar';
                boton_actualizar_post.id = post.id;
                boton_actualizar_post.addEventListener('click', function(){
                    form_actualizar_post(post.id, post.usuario_creador, post.titulo, post.descripcion, post.numero_jugadores, post.fecha);
                });
                

                let boton_borrar_post = document.createElement('button');
                boton_borrar_post.textContent = 'Borrar';
                boton_borrar_post.id = post.id;
                boton_borrar_post.addEventListener('click', function(){
                    borrar_post(post.id);
                });

                botonera_list_posts.appendChild(boton_borrar_post);
                botonera_list_posts.appendChild(boton_actualizar_post);

                div_detail_post.appendChild(p_texto_post);
                div_detail_post.appendChild(botonera_list_posts);
                div_listado_admin_post.appendChild(div_detail_post);
            });
        })
        .catch(error => console.log('Error: ' + error));

    

    div_post_list.appendChild(div_listado_admin_post);
    div_post_list.appendChild(h2_post_list);
    div_post_list.appendChild(boton_crear_post_admin);
    div_post_list.appendChild(div_listado_admin_post);


    fondo_post_list.appendChild(div_post_list);
    document.getElementById('main').appendChild(fondo_post_list);

    pintarFooter();
};
function form_crear_post_admin(){
    reseteo_header_footer();

    pintarHeader();

    document.getElementById('main').removeChild(document.getElementById('fondo_post_list'));

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
    boton_crear_post.type = 'button';
    boton_crear_post.addEventListener('click', function(){
        crear_post_admin(titulo_post.value, descr_post.value, jugad_post.value);
    });

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
function crear_post_admin(titulo_post, descr_post, jugad_post){

    const valores = {
        usuario_creador: datosUser[0],
        titulo: titulo_post,
        descripcion: descr_post,
        numero_jugadores: jugad_post
    };
    
    const opciones = {
            method: 'POST',
            headers : {
                'Content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('access_token')
        },
            body: JSON.stringify(valores)
    };
    
    fetch('https://api.rolltwicethedice.es/api/post_detail/' , opciones)  
    .then(response => console.log(response.status));  
};
function form_actualizar_post(id_post, id_usuario, titulo, descripcion, numero_jugadores){

    reseteo_header_footer();
    document.getElementById('main').removeChild(document.getElementById('fondo_post_list'));

    pintarHeader();

    let fondo_form_actualizar_post = document.createElement('div');
    fondo_form_actualizar_post.id = 'fondo_form_actualizar_post';

    let div_form_actualizar_post = document.createElement('div');
    div_form_actualizar_post.id = 'div_form_actualizar_post';

    let h2_actualizar_post = document.createElement('h2');
    h2_actualizar_post.textContent = 'Actualizar Post';

    let form_actualizar_post = document.createElement('form');
    form_actualizar_post.id = 'form_actualizar_post';

    let label_titulo = document.createElement('label');
    label_titulo.for = 'form_act_titulo';
    label_titulo.textContent = 'Título:';

    let input_titulo = document.createElement('input');
    input_titulo.value = titulo;
    input_titulo.id = 'form_act_titulo';

    let label_desc = document.createElement('label');
    label_desc.for = 'form_act_desc';
    label_desc.textContent = 'Descripción';

    let input_desc = document.createElement('textarea');
    input_desc.id = 'form_act_desc';
    input_desc.value = descripcion;

    let label_num_jugadores = document.createElement('label');
    label_num_jugadores.for = 'form_act_num_jugadores';
    label_num_jugadores.textContent = 'Nº Jugadores:';

    let input_num_jugadores = document.createElement('input');
    input_num_jugadores.value = numero_jugadores;
    input_num_jugadores.id = 'form_act_num_jugadores';
    input_num_jugadores.type = 'number';

    let boton_actualizar_post = document.createElement('button');
    boton_actualizar_post.textContent = 'Actualizar Post';
    boton_actualizar_post.addEventListener('click', function(){
        actualizar_post(id_post, id_usuario, input_titulo.value, input_desc.value, input_num_jugadores.value);
    })
    boton_actualizar_post.type = 'button';

    form_actualizar_post.appendChild(label_titulo);
    form_actualizar_post.appendChild(input_titulo);
    form_actualizar_post.appendChild(label_desc);
    form_actualizar_post.appendChild(input_desc);
    form_actualizar_post.appendChild(label_num_jugadores);
    form_actualizar_post.appendChild(input_num_jugadores);
    form_actualizar_post.appendChild(boton_actualizar_post);

    div_form_actualizar_post.appendChild(h2_actualizar_post);
    div_form_actualizar_post.appendChild(form_actualizar_post);

    fondo_form_actualizar_post.appendChild(div_form_actualizar_post);
    document.getElementById('main').appendChild(fondo_form_actualizar_post);
    pintarFooter();

};
function actualizar_post(id_post, id_usuario, titulo_nuevo, descripcion_nueva, numero_jugadores_nuevo){
    const valores = {
        usuario_creador: id_usuario,
        titulo: titulo_nuevo,
        descripcion: descripcion_nueva,
        numero_jugadores: numero_jugadores_nuevo
    };
    
    const opciones = {
            method: 'PATCH',
            headers : {
                'Content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('access_token')
        },
            body: JSON.stringify(valores)
    };
    
    fetch('https://api.rolltwicethedice.es/api/post_detail/'+id_post+'/' , opciones)  
    .then(response => console.log(response.status))
    .catch(error => {
        console.error('Error:', error);
    });
};
function borrar_post(id_post){
    let opciones = {
        method: 'DELETE',
        headers: {
            'Authorization': 'JWT ' + localStorage.getItem('access_token')
        }
    };

    fetch('https://api.rolltwicethedice.es/api/post_detail/'+ id_post +'/', opciones)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.error('Error:', error);
        });
};
function recoger_partidas(){
    let opciones = {
        method: 'GET',
        headers: {
            'Authorization': 'JWT ' + localStorage.getItem('access_token')
        }
    };

    fetch('https://api.rolltwicethedice.es/api/user/posts/', opciones)
        .then(response => {
            return response.json();
        })
        .then(data => {
            pintar_menu_admin(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
};
function pintar_menu_admin(listado_partidas){
    reseteo_header_footer();
    document.getElementById('main').removeChild(document.getElementById('fondo_perfil'));
    pintarHeader();

    let fondo_admin = document.createElement('div');
    fondo_admin.id = 'fondo_admin';

    let div_menu_admin = document.createElement('div');
    div_menu_admin.id = 'menu_admin';

    let h1_admin = document.createElement('h1');
    h1_admin.textContent = 'Administrar partidas';
    h1_admin.id = 'h1_admin';

    let div_listado_admin = document.createElement('div');
    div_listado_admin.id = 'div_listado_admin';

    let contador = 0;
    
    listado_partidas.forEach(function(partida){
        let div_partida = document.createElement('div');
        div_partida.id = partida.id;
        if(contador%2 == 0){
            div_partida.style.background = 'grey';
        } else{
            div_partida.style.background = 'white';
        }
        div_partida.addEventListener('click', pintar_detalle_partida);

        let h2_titulo_partida = document.createElement('h2');
        h2_titulo_partida.textContent = partida.titulo;

        let jugad_admin = document.createElement('p');
        jugad_admin.textContent = partida.numero_jugadores;

        let fecha_admin = document.createElement('p');
        fecha_admin.textContent = partida.fecha.split('T')[0];

        contador++;
        div_partida.appendChild(h2_titulo_partida);
        div_partida.appendChild(jugad_admin);
        div_partida.appendChild(fecha_admin);

        div_listado_admin.appendChild(div_partida);

    });
   
    div_menu_admin.appendChild(h1_admin);
    div_menu_admin.appendChild(div_listado_admin);
    
    
    fondo_admin.appendChild(div_menu_admin);
    document.getElementById('main').appendChild(fondo_admin);
    pintarFooter();
    
};
function pintar_detalle_partida(){
    
    let opciones = {
        method: 'GET',
        headers: {
            'Authorization': 'JWT ' + localStorage.getItem('access_token')
        }
    };

    fetch('https://api.rolltwicethedice.es/api/partida_detail/'+ this.id+'/', opciones)
        .then(response => {
            return response.json();
        })
        .then(data => {
           pintar_lista_jugadores(data.lista_jugadores);
        })
        .catch(error => {
            console.error('Error:', error);
        });


};
function pintar_lista_jugadores(lista_jugadores){
    reseteo_header_footer();
    document.getElementById('main').removeChild(document.getElementById('fondo_admin'));
    pintarHeader();
    
    let fondo_lista_jugadores = document.createElement('div');
    fondo_lista_jugadores.id = 'fondo_lista_jugadores';

    let div_listado_jugadores = document.createElement('div');
    div_listado_jugadores.id = 'div_listado_jugadores';

    let h1_listado_jugadores = document.createElement('h1');
    h1_listado_jugadores.textContent = 'Lista de jugadores';
    h1_listado_jugadores.id = 'h1_listado_jugadores';

    div_listado_jugadores.appendChild(h1_listado_jugadores);

    let div_listado_jugadores_interior = document.createElement('div');
    div_listado_jugadores_interior.id = 'div_listado_jugadores_interior';

    div_listado_jugadores.appendChild(div_listado_jugadores_interior);

    let contador = 0;

    lista_jugadores.forEach(function(jugador){
        console.log(jugador);
        let div_detalle_jugador = document.createElement('div');
        div_detalle_jugador.id = jugador.usuario;
        if(contador%2 == 0){
            div_detalle_jugador.style.background = 'grey';
        } else {
            div_detalle_jugador.style.background = 'white';
        }
        contador++;
        let h2_nombre_jugador = document.createElement('h2');
        h2_nombre_jugador.textContent = jugador.usuario_name

        let fecha_jugador = document.createElement('p');
        fecha_jugador.textContent = jugador.fecha_union.split('T')[0];

        let aceptado_button = document.createElement('button');
        if(jugador.aceptado == false){
            aceptado_button.textContent = 'X';
            aceptado_button.addEventListener('click', function(){
                console.log('hola');
                activar_jugador(jugador.id);
            })
        } else if(jugador.aceptado == true){
            aceptado_button.textContent = '✔';
        };

        div_detalle_jugador.appendChild(h2_nombre_jugador);
        div_detalle_jugador.appendChild(fecha_jugador);
        div_detalle_jugador.appendChild(aceptado_button);

        div_listado_jugadores_interior.appendChild(div_detalle_jugador);
        console.log(jugador);

    })

    fondo_lista_jugadores.appendChild(div_listado_jugadores);
    document.getElementById('main').appendChild(fondo_lista_jugadores);

    console.log(lista_jugadores);
    pintarFooter();

};
function activar_jugador(id_jugador){

    const opciones = {
            method: 'POST',
            headers : {
                'Content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('access_token'),
                'X-CSRFToken': getCookie('csrftoken')
        }
    };
    
    fetch('https://api.rolltwicethedice.es/actualizar_jugador/'+id_jugador+'/' , opciones)  
    .then(response => console.log(response.status));  
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
                    'Content-type': 'application/json',
                    'Authorization': 'JWT ' + localStorage.getItem('access_token')
            },
                body: JSON.stringify(valores)
        }
        
        fetch('https://api.rolltwicethedice.es/api/perfil_detail/'+id_user_perfil+'/'  , opciones)  
        .then(response => console.log(response.status));   
};
function recoger_datos_usuario(){

    let arrayDatosUser = [];


    let opciones = {
        method: 'GET',
        headers: {
            'Authorization': 'JWT ' + localStorage.getItem('access_token')
        }
    };

    fetch('https://api.rolltwicethedice.es/auth/users/me/', opciones)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data)
            arrayDatosUser.push(data.id);
            arrayDatosUser.push(data.email);
            arrayDatosUser.push(data.name);
            arrayDatosUser.push(data.post_por_user);
            arrayDatosUser.push(data.create_date);
            arrayDatosUser.push(data.descripcion_perfil);
            arrayDatosUser.push(data.is_staff);
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
    boton_crear_post.type = 'button';
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

    const valores = {
            usuario_creador: datosUser[0],
            titulo: document.getElementById('titulo_post').value,
            descripcion: document.getElementById('descr_post').value,
            numero_jugadores: document.getElementById('jugad_post').value
        }
        
        const opciones = {
                method: 'POST',
                headers : {
                    'Content-type': 'application/json',
                    'Authorization': 'JWT ' + localStorage.getItem('access_token')
            },
                body: JSON.stringify(valores)
        }
        
        fetch('https://api.rolltwicethedice.es/api/post_detail/' , opciones)  
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
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        })
    };

    fetch('https://api.rolltwicethedice.es/api/auth/jwt/create/', opciones)
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
            location.reload();
            })
            .catch(error => {
            console.error('Error:', error);
            });
};
function landing_page(){
    pintarHeader_login();
    let div_landing = document.createElement('div');
    div_landing.id = 'div_landing';

    let div_texto_landing = document.createElement('div');
    div_texto_landing.id = 'div_texto_landing';

    let div_boton_login = document.createElement('div');
    div_boton_login.id = 'div_boton_login';

    let h1_landing = document.createElement('h1');
    h1_landing.id = 'h1_landing';
    h1_landing.textContent = '¡Conecta con gente y únete a la aventura!';

    let p_landing = document.createElement('p');
    p_landing.id = 'p_landing';
    p_landing.textContent = 'Bienvenido a RollTwiceTheDice, un punto de encuentro entre personas que buscan gente con la que completar sus partidas de rol, iniciarse en ellas o simplemente pasarlo bien. ¿A que esperas para unirte? Regístrate y comienza a divertirte.';

    let boton_pintar_login = document.createElement('button');
    boton_pintar_login.id = 'boton_pintar_login';
    boton_pintar_login.textContent = 'Ya tengo cuenta';
    boton_pintar_login.addEventListener('click', function(){

        document.getElementById('main').removeChild(document.getElementById('div_landing'));
        document.getElementById('main').removeChild(document.getElementById('footer'));

        pintar_login();  
        pintarFooter();
    })

    let p_boton_login = document.createElement('p');
    p_boton_login.textContent = 'Si ya tienes cuenta y has venido a pasarlo en grande presiona el botón'

    div_boton_login.appendChild(p_boton_login);
    div_boton_login.appendChild(boton_pintar_login);

    div_texto_landing.appendChild(h1_landing);
    div_texto_landing.appendChild(p_landing);

    div_landing.appendChild(div_texto_landing);
    div_landing.appendChild(div_boton_login);
    document.getElementById('main').appendChild(div_landing)
    pintarFooter();

};
if(localStorage.getItem('access_token') == null){
    landing_page();
} else { 
    pintar_inicio();
};

// ENVIO DE EMAIL A USUARIOS ACEPTADOS
 