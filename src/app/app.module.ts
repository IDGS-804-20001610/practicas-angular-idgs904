import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DistanceModule } from './distance/distance.module';
import { ResistanceModule } from './resistance/resistance.module';
import { CinepolisModule } from './cinepolis/cinepolis.module';
import { AppRoutingModule } from './app.routing.module';
import { MenuComponent } from './menu/menu.component';
import { PizzasModule } from './pizzas/pizzas.module';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DistanceModule,
    ResistanceModule,
    CinepolisModule,
    PizzasModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
