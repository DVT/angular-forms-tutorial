import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import {FormsModule} from '@angular/forms';
import { LocalPhoneNumberDirective } from './forms/directives/local-phone-number.directive';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    LocalPhoneNumberDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
