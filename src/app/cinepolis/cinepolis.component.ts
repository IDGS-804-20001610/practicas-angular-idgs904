import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {

  name!: string;
  buyers!: number;
  tickets!: number;
  result!: number;
  
  optionCard: string = '';
  subtotal: number = 0;

  calculate() {
    if (this.tickets <= (this.buyers * 7)) {

      this.subtotal = this.tickets * 12;

      if (this.tickets > 5) {
        this.result = this.subtotal - (this.subtotal * 0.15);
      }
      else if (this.tickets >= 3) {
        this.result = this.subtotal - (this.subtotal * 0.10);
      }
      else {
        this.result = this.subtotal;
      }

      if (this.optionCard === '1') {
        this.result = this.result - (this.result * 0.10);
      }
    }
    else 
    {
      console.log("Error: el número de boletos comprados no puede exceder " + this.buyers * 7);
      this.result = 0;
    }
  }
}