import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResistanceComponent } from './resistance.component';

import {FormsModule} from '@angular/forms';




@NgModule({
  declarations: [
    ResistanceComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    ResistanceComponent
  ]
})
export class ResistanceModule { }
