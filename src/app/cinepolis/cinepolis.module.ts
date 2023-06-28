import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {FormsModule} from '@angular/forms';
import { CinepolisComponent } from './cinepolis.component';

@NgModule({
  declarations: [CinepolisComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatRadioModule,
    MatButtonModule
  ],
  exports: [
    CinepolisComponent
  ]
})
export class CinepolisModule { }
