import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';


@NgModule({
  declarations: [
    AppComponent,
    Form1Component,
    Form2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
