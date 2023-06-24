import { Component } from '@angular/core';

interface Band {
  value: string;
  viewValue: string;
  textColor: string;
}

interface Tolerance {
  value: string;
  ViewValue: string;
}

@Component({
  selector: 'app-resistance',
  templateUrl: './resistance.component.html',
  styleUrls: ['./resistance.component.css']
})

export class ResistanceComponent {

  tolerances: Tolerance[] = [
    { value: 'gold', ViewValue: 'Gold' },
    { value: 'silver', ViewValue: 'Silver' }
  ]

  selectedValue1: string = '';
  selectedValue2: string = '';
  selectedValue3: string = '';
  selectedTolerance: string = '';

  bands: Band[] = [
    { value: 'black', viewValue: 'Black', textColor: 'white' },
    { value: 'brown', viewValue: 'Brown', textColor: 'white' },
    { value: 'red', viewValue: 'Red', textColor: 'white' },
    { value: 'orange', viewValue: 'Orange', textColor: 'white' },
    { value: 'yellow', viewValue: 'Yellow', textColor: 'black' },
    { value: 'green', viewValue: 'Green', textColor: 'white' },
    { value: 'blue', viewValue: 'Blue', textColor: 'white' },
    { value: 'purple', viewValue: 'Purple', textColor: 'white' },
    { value: 'gray', viewValue: 'Gray', textColor: 'white' },
    { value: 'white', viewValue: 'White', textColor: 'black' }
  ];

  

  ba1!: number;
  ba2!: number;
  ba3!: number;
  to!: number;
  min!: number;
  max!: number

  color!: string;
  color3!: string;

  result! : number;

  calculate() {
    switch(this.selectedValue1){
      case 'black': 
        this.ba1 = 0;
        break;
      case 'brown': 
        this.ba1 = 10;
        break;
      case 'red': 
        this.ba1 = 20;
        break;
        case 'orange': 
        this.ba1 = 30;
        break;
      case 'yellow': 
        this.ba1 = 40;
        break;
      case 'green': 
        this.ba1 = 50;
        break;
      case'blue': 
        this.ba1 = 60;
        break;
      case'purple': 
        this.ba1 = 70;
        break;
      case'gray': 
        this.ba1 = 80;
        break;
      case'white': 
        this.ba1 = 90;
        break;
    }

    switch(this.selectedValue2){
      case 'black': 
        this.ba2 = 0;
        break;
      case 'brown': 
        this.ba2 = 1;
        break;
      case 'red': 
        this.ba2 = 2;
        break;
        case 'orange': 
        this.ba2 = 3;
        break;
      case 'yellow': 
        this.ba2 = 4;
        break;
      case 'green': 
        this.ba2 = 5;
        break;
      case'blue': 
        this.ba2 = 6;
        break;
      case'purple': 
        this.ba2 = 7;
        break;
      case'gray': 
        this.ba2 = 8;
        break;
      case'white': 
        this.ba2 = 9;
        break;
    }

    switch(this.selectedValue3){
      case 'black': 
        this.ba3 = 1;
        break;
      case 'brown': 
        this.ba3 = 10;
        break;
      case 'red': 
        this.ba3 = 100;
        break;
        case 'orange': 
        this.ba3 = 1000;
        break;
      case 'yellow': 
        this.ba3 = 10000;
        break;
      case 'green': 
        this.ba3 = 100000;
        break;
      case'blue': 
        this.ba3 = 1000000;
        break;
      case'purple': 
        this.ba3 = 10000000;
        break;
      case'gray': 
        this.ba3 = 100000000;
        break;
      case'white': 
        this.ba3 = 1000000000;
        break;
    }

    switch(this.selectedTolerance) {
      case 'gold':
        this.to = 0.05;
        break;
      case 'silver':
        this.to = 0.1;
        break;
    }

    this.result = (this.ba1 + this.ba2) * this.ba3;
    this.min = this.result - (this.result * this.to);
    this.max = this.result + (this.result * this.to);
  }
}