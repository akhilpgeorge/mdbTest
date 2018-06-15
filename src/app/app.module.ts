import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from "angular-bootstrap-md";

import { SharedModuleModule } from "./shared-module/shared-module.module";

import { AppComponent } from './app.component';
import { LandingCarouselComponent } from './landing-carousel/landing-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingCarouselComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    SharedModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
