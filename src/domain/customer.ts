export class Customer {
  public balance: number;
  constructor(public name: string, initialDeposit: number) {
    this.balance = initialDeposit;
  }

  deposit(amount: number) {
    this.balance += amount;
  }

  withdraw(amount:number){
    if(amount > this.balance){
        throw new Error('Not enought money')
    }
    this.balance -= amount
  }

  check(): string {
    return `Balance: ${this.balance.toFixed(2)}`;
  }
}