let b=true;
let n=0;
let f=1;
const ingresenumero=() => {
    do{
        n= prompt("favor ingrese un numero tabla de Multiplicar y factorial");
        if (n>20 || n<1)
        {console.log("Numero fuera de rango, intente nuevamente")};
        b= (n>20) || (n<1);
    } while (b);
    return n;
} 

let n1=ingresenumero()

for (let i = 1; i <= n1; i++) {
    console.log(i+"x"+ n1+"="+i*n1);    
}

for (let i = 1; i <= n1; i++) {
    f=i*f;
    console.log("Factorial de", i, "es:", f);
}