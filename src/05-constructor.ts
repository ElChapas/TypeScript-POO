export class MyDate {
  constructor( // Manera corta de definir atributos
    private year: number, // Public o Private son necesarios.
    private month: number,
    private day: number
  ) {

  }

  printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this.day += amount;
    }
    if (type === 'months') {
      this.month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }
}

const myDate = new MyDate(2022, 2, 3);
// myDate.day //Property 'day' is private and only accessible within class 'MyDate
