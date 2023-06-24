import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResistanceComponent } from './resistance.component';

import {FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';




@NgModule({
  declarations: [
    ResistanceComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatRadioModule,
    MatButtonModule
  ],
  exports: [
    ResistanceComponent
  ]
})
export class ResistanceModule { }
