//FUNÇÃO SEM RETORNO
function somar (n1, n2){
    var r = n1+n2;
    alert("Função de soma sem retorno. Resultado " + r);
}

//FUNÇÃO COM RETORNO
function subtrair(a,b){
    var r = a - b;
    return(r);
}

somar(10, 35);
var resultado;
resultado = subtrair(35,10);
alert("Função de soma com retorno. Resultado " + resultado);