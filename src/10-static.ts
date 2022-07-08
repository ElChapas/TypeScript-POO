// console.log(Math.PI);

export class MyMath{ // Atributos y metodos estaticos hacen una clase estatica. Como la libreria Math de js
  static PI = 3.1416;

  static max(...numbers: number[]) { // Res params
    return numbers.reduce((max, item) => max > item ? max : item)
  }

}

console.log(MyMath.PI);
console.log(MyMath.max(1,4,5,6,3,66,3,112,5));


