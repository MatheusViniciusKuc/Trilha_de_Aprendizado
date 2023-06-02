var aprovado, ano;

ano = parseInt(prompt("Em que ano você nasceu: "));
aprovado = prompt("Você foi aprovado na prova prática |Responda com sim ou não|: ");

if((2022-ano) >= 18){
    if(aprovado == "sim" || aprovado == "Sim"){
        alert("FOI APTO A PEGAR A CNH");
    } else {
        alert("FOI INAPTO A PEGAR A CNH, POIS REPROVOU NA PROVA");
    }
} else{
    alert("FOI INAPTO A PEGAR A CNH, POIS NÃO TEM IDADE SUFICIENTE");
}