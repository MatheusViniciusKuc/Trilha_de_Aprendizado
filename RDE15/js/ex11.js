var n, cont, t;

n = parseInt(prompt("Digite um número para saber sua tabuada: "));

for(cont=0;cont<11;cont++){
    t=n*cont;
    document.write("<h2>"+t+"</h2>")
}