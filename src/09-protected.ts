export abstract class Animal {
  constructor(protected name: string) {} // Protected es como private, pero sirve en sus clases heredadas

  move(): void {
    console.log(this.name + ' is moving...');
  }
  greetings(): void {
    console.log("Hello, I'm " + this.name);
  }

  protected doSomething(){ // De esta forma heredamos este metodo para ser utilizado en una clase hijo.
    console.log('hi');
  }

}

export class Dog extends Animal {
  constructor(name: string, public owner: string) {
    super(name);
  }

  woof(times: number) {
    for (let i = 0; i < times; i++) {
      console.log('Woof!');
    }
    this.doSomething() // Gracias a protected de este metodo en Animal, podemos usarlo en esta clase.
  }
}

const chokomil = new Dog('Chokomil', 'Oscar');

// console.log(chokomil.name);
chokomil.greetings();
chokomil.woof(3);

console.log(Animal.isPrototypeOf(Dog));

// chokomil.name = 'Hola'
