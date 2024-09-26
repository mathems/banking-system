import { expect, test, describe, beforeEach } from 'vitest';
import { BankService } from '../domain/bank/services/bankService';

describe('BankService class', () => {
    let bankService: BankService;
  
    beforeEach(() => {
      bankService = new BankService();
      bankService.addCustomer('Andrew', 705);
      bankService.addCustomer('Daniel', 880);
    });
  
    test('should add a new customer', () => {
      const customer = bankService.addCustomer('Max', 110);
      expect(customer.name).toBe('Max');
      expect(customer.balance).toBe(110);
    });
  
    test('should retrieve a customer by name', () => {
      const customer = bankService.getCustomer('Andrew');
      expect(customer?.name).toBe('Andrew');
      expect(customer?.balance).toBe(705);
    });
  
    test('should return customer balance as a formatted string using checkCustomerBalance method', () => {
      const balanceString = bankService.checkCustomerBalance('Daniel');
      expect(balanceString).toBe('Balance: 880.00');
    });
  
    test('should transfer money between customers', () => {
      bankService.transfer('Andrew', 'Daniel', 220);
      const andrew = bankService.getCustomer('Andrew');
      const daniel = bankService.getCustomer('Daniel');
      expect(andrew?.balance).toBe(485);
      expect(daniel?.balance).toBe(1100);
    });
  
    test('should throw an error when transferring money from or to a non-existent customer', () => {
      expect(() => bankService.transfer('Andrew', 'Neo', 100)).toThrow('Customer not found');
      expect(() => bankService.transfer('Neo', 'Daniel', 200)).toThrow('Customer not found');
    });
  
    test('should return total bank balance', () => {
      const totalBalance = bankService.getTotalBalance();
      expect(totalBalance).toBe(1585);
    });
  });