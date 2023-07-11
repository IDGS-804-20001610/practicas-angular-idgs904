import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CinepolisComponent } from "./cinepolis/cinepolis.component";
import { DistanceComponent } from "./distance/distance.component";
import { ResistanceComponent } from "./resistance/resistance.component";
import { PizzasComponent } from "./pizzas/pizzas.component";

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'CinepolisComponent', component: CinepolisComponent},
    {path: 'DistanceComponent', component: DistanceComponent},
    {path: 'ResistanceComponent', component: ResistanceComponent},
    {path: 'PizzasComponent', component: PizzasComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}