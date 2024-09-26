import { Customer } from '../../customer/customer';

export class BankService {
  private customers: Map<string, Customer> = new Map();

  addCustomer(name: string, initialDeposit: number): Customer {
    const customer = new Customer(name, initialDeposit);
    this.customers.set(name, customer);
    return customer;
  }

  getCustomer(name: string): Customer | undefined {
    return this.customers.get(name);
  }

  checkCustomerBalance(name: string): string | undefined {
    const customer = this.getCustomer(name);
    if (!customer) {
      throw new Error("Customer not found");
    }
    return customer.check();
  }

  transefer(from: string, to: string, amount: number) {
    const fromCustomer = this.getCustomer(from);
    const toCustomer = this.getCustomer(to);

    if (!fromCustomer || !toCustomer) {
      throw new Error("Customer not found");
    }

    fromCustomer.withdraw(amount);
    toCustomer.deposit(amount);
  }

  getTotalBalance(): number | string {
    const completeBalance = Array.from(this.customers.values()).reduce(
      (acc, customer) => acc + customer.balance,
      0
    );
    return completeBalance === 0 ? "You are bankrupt" : completeBalance;
  }
}