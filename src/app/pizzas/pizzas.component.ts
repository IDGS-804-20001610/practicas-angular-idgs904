import { Component } from '@angular/core';

interface Order {
  id:number;
  size: string;
  toppings: string;
  noPizzas: number;
  subtotal: number;
  total: number
}

interface Day {
  name: string;
  total: number;
}

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent {

  name!: string;
  address!: string;
  phone!: number;
  pizzaSize!: string;
  noPizzas!: number;
  subtotal!: number;
  total!: number;
  totalF!: number;

  toppings = [
    { name: 'Ham', price: 10, checked: false },
    { name: 'Pineapple', price: 10, checked: false },
    { name: 'Mushrooms', price: 10, checked: false }
  ];

  orders: Order[] = [];
  days: Day[] = [];

  getToppings() {
    const toppingsSelected = this.toppings
      .filter(topping => topping.checked)
      .map(topping => topping.name);
    return toppingsSelected.join(', ');
  }

  size: number = 0;
  topp: number = 0;
  showTicket: boolean = false;

  calculateSubtotal() {
    this.size = 0;
    if (this.pizzaSize === 'Small') {
      this.size = 40;
    } else if (this.pizzaSize === 'Medium') {
      this.size = 80;
    } else if (this.pizzaSize === 'Large') {
      this.size = 120;
    }

    this.topp = 0;
    for (const topping of this.toppings) {
      if (topping.checked) {
        this.topp += topping.price;
      }
    }

    this.subtotal = (this.size + this.topp) * this.noPizzas;

    const order: Order = {
      id: Date.now(),
      size: this.pizzaSize,
      toppings: this.getToppings(),
      noPizzas: this.noPizzas,
      subtotal: this.subtotal,
      total: this.total
    };
    this.orders.push(order);

    const day: Day = {
      name: this.name,
      total: this.subtotal
    }

    this.days.push(day);
  }

  delete(id: number) {
    this.orders = this.orders.filter(order => order.id !== id);
  }

  calculateTotal() {
    this.total = 0;
    for (const order of this.orders) {
      this.total += order.subtotal;
    }
    return this.total;
  }

  calculateTotalDay() {
    let totalFInal = 0;
    for (const day of this.days) {
      totalFInal += day.total;
    }
    return totalFInal;
  }

  new() {
    this.name = '';
    this.address = '';
    this.phone = 0;
    this.pizzaSize = 'chica';
    for (const topping of this.toppings) {
      topping.checked = false;
    }  
    this.noPizzas = 0;
    this.orders = [];
    this.subtotal = 0;
    this.total = 0;
    this.showTicket = false;
  }

  show() {
    this.showTicket = true;
  }
}