import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzasComponent } from './pizzas.component';

import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';




@NgModule({
  declarations: [
    PizzasComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatRadioModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule
  ]
})
export class PizzasModule { }
