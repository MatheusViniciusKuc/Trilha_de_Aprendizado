function enviar(){
    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var ok;

    if(nome.value!="" && nome.value.indexOf(" ")!=-1){
        alert("Agradecemos o contato")
    } else {
        alert("Preencha seu nome completo")
    }
}