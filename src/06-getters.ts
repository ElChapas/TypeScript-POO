export class MyDate {
  constructor(
    private _year: number,
    private _month: number,
    private _day: number
  ) {

  }

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
  }

  get day(){
    return this._day;
  }
}
