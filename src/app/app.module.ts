import { GalleryComponent } from './content/gallery/gallery.component';
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
import { ImgTextLComponent } from './content/img-text-l/img-text-l.component';
import { CardComponent } from './content/card/card.component';
import { JumboComponent } from './content/jumbo/jumbo.component';
import { ImgTextCComponent } from './content/img-text-c/img-text-c.component'

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
    ImgTextLComponent,
    CardComponent,
    JumboComponent,
    ImgTextCComponent,
    GalleryComponent
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
