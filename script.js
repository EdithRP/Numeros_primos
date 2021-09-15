//Leer informacion salario base y ventas

let base, vt1, vt2, vt3;
let totalventas=0;
let comision=0;
let totalpagar=0;

base= Number(prompt('Ingrese salario base'));
vt1= Number(prompt('Ingrese venta 1'));
vt2= Number(prompt('Ingrese venta 2'));
vt3= Number(prompt('Ingrese venta 3'));

//Calculos

totalventas= (vt1+vt2+vt3);
comision= totalventas*0.1;
totalpagar=base+comision;

//Imprimir
console.log(comision)
alert(`El total a pagar es de:  ${totalpagar}`)


