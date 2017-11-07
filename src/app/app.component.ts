import { Component } from '@angular/core';
import { Resource }'ts-angular-jsonapi';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends Jsonapi.Resource {
  title = 'addressBook'
  public type = 'data';
  public schema: Jsonapi.ISchema = {
    attributes: {
      name: {},
      email: {},
      company: {},
      info: {},
      location: {}
    },

    relationships: {
      id: {
        hasOne: true
      },
      type: {
        hasOne: true
      }
    }
  };
}


let app = angular.module('addressBook', ['rsJsonapi']);

app.config(['rsJsonapiConfig', (rsJsonapiConfig) => {
  angular.extend(rsJsonapiConfig, {
    url: '//jsonapiplayground.reyesoft.com/v2/'
  });
}]);

let MyController = function(JsonapiCore) {
}
MyController.$inject = ['JsonapiCore'];

class AppController {
  public data: any = null;

  constructor(AppService) {
    this.data = AppService.all();
  }
}


