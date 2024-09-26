export class Customer {
  public balance: number;
  constructor(public name: string, initialDeposit: number) {
    this.validateName(name);
    this.validateAmount(initialDeposit);
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

  private validateName(name: string) {
    if (typeof name !== 'string' || name.trim() === '') {
      throw new Error('Invalid customer name');
    }
  }

  private validateAmount(amount: number) {
    if (typeof amount !== 'number' || amount <= 0) {
      throw new Error('Amount must be a positive number');
    }
  }
}