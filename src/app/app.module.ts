import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { LandingPageWelcomeComponent } from './Components/landing-page-welcome/landing-page-welcome.component';
import { LandingPageOrderComponent } from './Components/landing-page-order/landing-page-order.component';
import { LandingPageContactComponent } from './Components/landing-page-contact/landing-page-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LandingPageWelcomeComponent,
    LandingPageOrderComponent,
    LandingPageContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
