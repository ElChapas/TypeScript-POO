// function getValue(value: number){
//   return value
// }

function getValue<T>(value: T) {
  return value;
}

getValue(12).toFixed; // TS infiere que el parametro es number
getValue<number>(12).toFixed; // Pero es mejor declararlo al mandarle el parametro.

getValue<string>('hola');
