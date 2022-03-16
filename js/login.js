/*la siguient funcion oculta un elemnto y a la vez deja el otro visible segun cual se necesite */
function visibilidad(elemnto1,elemnto2) {
    document.getElementsByClassName(elemnto1)[0].style.opacity = 0;
    document.getElementsByClassName(elemnto1)[0].style.display="none";
    document.getElementsByClassName(elemnto2)[0].style.opacity = 1;
    document.getElementsByClassName(elemnto2)[0].style.display="block";

}
function transicionLogin(elem1,elem2,px,opOc,opMo){
    document.getElementsByClassName("contenedor_login-register")[0].style.left = px+"px";
        //   visibilidad("registrarse_google","login_google");
        visibilidad(elem1, elem2);
          document.getElementsByClassName("caja_trasera_login")[0].style.opacity = "opOc";
          document.getElementsByClassName("caja_trasera_registro")[0].style.opacity = "opMo";
}

document.addEventListener("DOMContentLoaded",function(e){

    document.getElementById("btn_iniciar-session").addEventListener("click",function(e){
          if (window.innerWidth>850) {
            document.getElementsByClassName("contenedor_login-register")[0].style.left = "10px"
            visibilidad("registrarse_google","login_google");
            document.getElementsByClassName("caja_trasera_login")[0].style.opacity = "0";
            document.getElementsByClassName("caja_trasera_registro")[0].style.opacity = "1";
          // transicionLogin("registrarse_google","login_google",10,1,0); ver luego como puedo hacerlo una funcion              
          }else{
            document.getElementsByClassName("contenedor_login-register")[0].style.left = "0px"
            visibilidad("registrarse_google","login_google");
            document.getElementsByClassName("caja_trasera_login")[0].style.display = "none";
            document.getElementsByClassName("caja_trasera_registro")[0].style.display="block";
          }

    });
        document.getElementById("btn_registrarse").addEventListener("click",function(e){
        if (window.innerWidth>850) {
            document.getElementsByClassName("contenedor_login-register")[0].style.left = "410px"
            visibilidad("login_google","registrarse_google");
            document.getElementsByClassName("caja_trasera_registro")[0].style.opacity = "0";
            document.getElementsByClassName("caja_trasera_login")[0].style.opacity = "1";            
        } else {
            document.getElementsByClassName("contenedor_login-register")[0].style.left = "0px"
            visibilidad("login_google","registrarse_google");
            document.getElementsByClassName("caja_trasera_registro")[0].style.display="none";
            document.getElementsByClassName("caja_trasera_login")[0].style.display="block"; 
            // document.getElementsByClassName("caja_trasera_login")[0].style.opacity="1"; 
        }    

    });
});