function somar(){
    var n1, n2, r;
    n1 = parseFloat(document.getElementById("n1").value);
    n2 = parseFloat(document.getElementById("n2").value);

    r=n1+n2;

    document.getElementById("resultado").innerHTML = `O resultado da soma é ${r}`;
}