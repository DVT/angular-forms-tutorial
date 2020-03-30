import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import {ReactiveFormsModule} from "@angular/forms";
import { LocalPhoneNumberDirective } from './forms/directives/local-phone-number.directive';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    LocalPhoneNumberDirective
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
