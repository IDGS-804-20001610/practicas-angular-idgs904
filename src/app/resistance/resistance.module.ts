import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResistanceComponent } from './resistance.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ResistanceComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule,
    MatFormFieldModule,
    FormsModule,
  ],
  exports: [
    ResistanceComponent
  ]
})
export class ResistanceModule { }
