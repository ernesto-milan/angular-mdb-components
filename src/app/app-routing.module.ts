import { ChiSiamoComponent } from './page/chi-siamo/chi-siamo.component';
import { AmbienteComponent } from './page/ambiente/ambiente.component';
import { OfferteComponent } from './page/offerte/offerte.component';
import { CamereComponent } from './page/camere/camere.component';
import { HomeComponent } from './page/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"camere", component:CamereComponent},
  {path:"offerte", component:OfferteComponent},
  {path:"ambiente", component:AmbienteComponent},
  {path:"chiSiamo", component:ChiSiamoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
