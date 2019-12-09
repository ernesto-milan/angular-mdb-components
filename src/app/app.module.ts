import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavComponent } from './basic/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BackgroundComponent } from './basic/background/background.component';
import { FooterComponent } from './basic/footer/footer.component';
import { HomeComponent } from './page/home/home.component';
import { CamereComponent } from './page/camere/camere.component';
import { AmbienteComponent } from './page/ambiente/ambiente.component';
import { OfferteComponent } from './page/offerte/offerte.component';
import { ChiSiamoComponent } from './page/chi-siamo/chi-siamo.component';
import { ImgTextRComponent } from './content/img-text-r/img-text-r.component';
import { ImgTextLComponent } from './content/img-text-l/img-text-l.component'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BackgroundComponent,
    FooterComponent,
    HomeComponent,
    CamereComponent,
    AmbienteComponent,
    OfferteComponent,
    ChiSiamoComponent,
    ImgTextRComponent,
    ImgTextLComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
