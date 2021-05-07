const ema = document.getElementById('usuario');
const nom = document.getElementById('nombre');
const con = document.getElementById('password');
const form = document.getElementById('formulario')
ema.value=""
nom.value="";
con.value="";

form.addEventListener("submit",e=>{
    e.preventDefault()
    let entrar = false
    if (ema.value.length==0) {
        entrar=true
    }
    if (nom.value.length==0) {
        entrar=true
    }
    if (con.value.length==0) {
        entrar=true
    }

    if (entrar) {
        
    }else{
        var btnAbrirPopup = document.getElementById('boton-iniciar'),
        overlay = document.getElementById('overlay'),
        popup = document.getElementById('popup'),
        btnCerrarPopup = document.getElementById('btn-cerrar-popup');

        btnAbrirPopup.addEventListener('click', function(){
            overlay.classList.add('active');
            popup.classList.add('active');
            ema.value=""
            nom.value="";
            con.value="";

        });
        btnCerrarPopup.addEventListener('click', function(e){
            e.preventDefault();
            overlay.classList.remove('active');
            popup.classList.remove('active');
        });


    }


})

