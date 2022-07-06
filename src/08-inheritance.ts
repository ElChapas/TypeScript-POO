export class Animal {
  constructor(public name: string) {}

  move():void {
    console.log(this.name + ' is moving...');
  }
  greetings():void {
    console.log("Hello, I'm " + this.name);
  }
}

export class Dog extends Animal{
  constructor(
    name: string, // Aqui no usamos public porque 'name' no se va a utilizar en esta clase, y perstenece solo a super.
    public owner: string, // Esta es una forma de definir atributos en esta clase
    ){
    super(name)
  }

  woof(times: number){
    for (let i = 0; i < times; i++) {
      console.log('Woof!');
    }
  }
}


// const fifi = new Animal('Fifi');
// fifi.greetings();
// fifi.move();

const chokomil = new Dog('Chokomil', 'Oscar');

console.log(chokomil.name);
chokomil.greetings();
chokomil.woof(3);

console.log(Animal.isPrototypeOf(Dog));


