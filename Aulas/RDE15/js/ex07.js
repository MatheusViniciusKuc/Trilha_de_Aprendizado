var n1, n2;

n1 = parseInt(prompt("Digite um número: "));
n2 = parseInt(prompt("Digite um número: "));

if(n1>n2){
    alert("O número " + n1 + " é maior que o número " + n2);
} else if (n1 == n2){
    alert("O número " + n1 + " é igual ao número " + n2);
} else{
    alert("O número " + n1 + " é menor que o número " + n2);
}