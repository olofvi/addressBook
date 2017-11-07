import { Component } from '@angular/core';
import { JsonApiDatastoreConfig, JsonApiDatastore, DatastoreConfig } from 'angular2-jsonapi';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  @JsonApiDatastoreConfig(config)


  constructor(http: Http) {
    super(http);

  @JsonApiModelConfig({
    type: 'contacts'
  })





