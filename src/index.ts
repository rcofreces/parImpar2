let number: number = Number(
  prompt("Ingrese un número para saber si es par o impar")
);

while (number === 0) {
  number = Number(prompt("Ingres un número mayor a 0"));
}
if (number % 2 === 0) {
  console.log("El número ingresado es par");
} else {
  console.log("El número ingresado es impar");
}
