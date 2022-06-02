let number: number = Number(
  prompt("Ingrese un número positivo para saber si es par o impar")
);

while (number === 0) {
  number = Number(
    prompt("Ingrese un número mayor a 0. No se permiten números negativos")
  );
}
if (number % 2 === 0) {
  console.log("El número ingresado es par");
} else {
  console.log("El número ingresado es impar");
}
