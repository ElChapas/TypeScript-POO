// Esta es una implementacion de los patrones SOLID, donde solo se puede crear una instancia de la clase.
// De esta forma aseguramos que la instancia siempre sera la primera que llegó.

export class MyService {

  static instance: MyService | null = null;

  private constructor(public name: string){}

  getName(){
    return this.name;
  }

  static create(name: string){
    if (MyService.instance) {
      MyService.instance = new MyService(name);
    }
    return MyService.instance;
  }
}

const myService1 = MyService.create('Hola 1');
const myService2 = MyService.create('Hola 2');
