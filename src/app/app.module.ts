import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DistanceModule } from './distance/distance.module';
import { ResistanceModule } from './resistance/resistance.module';
import { CinepolisComponent } from './cinepolis/cinepolis.component';
import { CinepolisModule } from './cinepolis/cinepolis.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DistanceModule,
    ResistanceModule,
    CinepolisModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
