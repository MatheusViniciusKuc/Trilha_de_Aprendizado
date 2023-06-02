var n1, n2 , sub;

n1 = parseInt(prompt("Digite um número inteiro: "));
n2 = parseInt(prompt("Digite outro número inteiro: "));

sub = n1 - n2;

if(sub > 0){
    alert("O resultado é: " + sub);
} else{
    alert("O resultado é negativo: " + sub);
}