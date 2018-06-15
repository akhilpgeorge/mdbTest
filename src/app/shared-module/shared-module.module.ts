import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

import { MDBBootstrapModule } from "angular-bootstrap-md";

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModuleModule { }
