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
    if (!customer){
        throw new Error('Customer not found')
    }
    return customer.check()
  }
}