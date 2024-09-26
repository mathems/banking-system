import { describe, expect, test, beforeEach } from "vitest";
import { Customer } from "../domain/customer/customer";

describe('Customer', ()=>{
    let customer: Customer;

    beforeEach(() => {
        customer = new Customer('Maggy', 550);
      });


    test('should create a customer with an initial deposit', () => {
        expect(customer.name).toBe('Maggy');
        expect(customer.balance).toBe(550);
    });

    test('should deposit money and update balance', () => {
        customer.deposit(500);
        expect(customer.balance).toBe(1050);
      });

      test('should withdraw money and update balance', () => {
        customer.withdraw(300);
        expect(customer.balance).toBe(250);
      });

      test('should throw error when withdrawing more than balance', () => {
        expect(() => customer.withdraw(1100)).toThrow('Not enought money');
      });
    
      test('should return balance as a string using check method', () => {
        expect(customer.check()).toBe('Balance: 550.00');
      });
})