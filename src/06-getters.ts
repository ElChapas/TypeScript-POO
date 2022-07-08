export class MyDate {
  constructor(
    private _year: number,
    private _month: number,
    private _day: number
  ) {}

  printFormat(): string {
    return `${this._day}/${this._month}/${this._year}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this._day += amount;
    }
    if (type === 'months') {
      this._month += amount;
    }
    if (type === 'years') {
      this._year += amount;
    }

    console.log(this.isLeapYear);
  }

  get day() {
    return this._day;
  }
  get month() {
    return this._month;
  }
  get year() {
    return this._year;
  }

  get isLeapYear(): boolean {
    return (
      (this.year % 400 === 0 || this.year % 100 !== 0) && this.year % 4 == 0
    );
  }

  // Todos los getters necesitan retornal algun valor, y no tienen parametros.
}

const myDate = new MyDate(2022, 2, 3);
myDate.day; // .day hace referencia al getter de day.
myDate.isLeapYear // Aqui tenemos un nuevo atributo que nos indica si el año es bisiesto
