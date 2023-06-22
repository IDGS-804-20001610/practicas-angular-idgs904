import { Component } from '@angular/core';

@Component({
  selector: 'app-distance',
  templateUrl: './distance.component.html',
  styleUrls: ['./distance.component.css']
})
export class DistanceComponent {
  x1!: number;
  y1!: number;
  x2!: number;
  y2!: number;
  resultado!: number;

  calculate() {
    this.resultado = Math.sqrt((Math.pow(this.x2 - this.x1, 2) + Math.pow(this.y2 - this.y1, 2)));
  }
}
