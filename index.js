//Dada una frase cualquiera (Esta puede contener cualquier cantidad de palabras),
//invertir la frase: Que la primera palabra quede de última, la segunda de penúltima, etc.

const invertirOracion = (oracion) => {
  let palabras = oracion.split(" ");

  let oracionInvertida = "";

  for (i = 0; i < palabras.length; i++) {
    oracionInvertida += palabras[palabras.length - i - 1] + " ";
  }

  console.log(oracionInvertida);
};

invertirOracion("Hola, Soy victor");
