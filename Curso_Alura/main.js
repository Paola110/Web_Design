
let cantidad = document.getElementById("cantidad");
let boton = document.getElementById("generar");
let botonLimpiar = document.getElementById("limpiar");
let constrasena = document.getElementById("contrasena");

const cadenaCaracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

function generar(){

    let numeroDigitado = parseInt(cantidad.value);

    if (numeroDigitado < 8 || cantidad.value == ""){
        alert("La cantidad debe ser mayor a 8");

    } else {

        let password = "";
        for (let i = 0; i < numeroDigitado; i++){
            
            let caracterAleatorio = cadenaCaracteres [Math.floor(Math.random() * cadenaCaracteres.length)];
            password+= caracterAleatorio;
    
        }
    
        constrasena.value = password;
        
        let segura = true;
        
        segura = segura && /[A-Z]/.test(contrasena.value); 

        segura = segura && /[!@#$%^&*()]/.test(contrasena.value); 

        if (segura){
            alert("La contraseña es segura");
        } else {
            alert("La contraseña es debil");
        }
    }


}

function limpiar(){
    constrasena.value = "";
    cantidad.value = "";
}
