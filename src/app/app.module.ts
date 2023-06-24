import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DistanceModule } from './distance/distance.module';
import { ResistanceComponent } from './resistance/resistance.component';
import { ResistanceModule } from './resistance/resistance.module';
import { CinepolisComponent } from './cinepolis/cinepolis.component';


@NgModule({
  declarations: [
    AppComponent,
    CinepolisComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DistanceModule,
    ResistanceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
