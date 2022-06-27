
//Juan Sebastian Girardot Antonio
var valid, num, i;
//Definimos variables 
do{
do{
num = prompt('Digite una tabla de multiplicar')
  if (num==""){
    num = 1;
  }
  //Damos un valor por defecto si el usuario no digita un numero
   }while(isNaN(num) || num < 1)
  for ( i = 1; i <= 10; i++){
  console.log(num+" X "+i+" = "+num*i)
    }
//Realizamos la operacion con un "for", y aumentamos la variable "i" hasta que llegue a 10.
  valid = confirm('deseas una nueva tabla')
}while(valid === true)
//Se repite si el usuario lo desea.