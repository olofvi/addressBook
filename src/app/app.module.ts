import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JsonApiModule } from 'angular2-jsonapi';

import { AppComponent } from './app.component';
import { JsonApiModelComponent } from './json-api-model/json-api-model.component';


@NgModule({
  declarations: [
    AppComponent,
    JsonApiModelComponent
  ],
  imports: [
    BrowserModule,
    JsonApiModule
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
