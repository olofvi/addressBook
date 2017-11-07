import { JsonApiDatastoreConfig, JsonApiDatastore, DatastoreConfig } from 'angular2-jsonapi';
import { AppComponent } from './app.component';


const config: DatastoreConfig = {
  baseUrl: 'https://ca-address-book.herokuapp.com/api/contacts',
  data: {
    id: any,
    type: contacts,
    attributes: {}
  }

@Injectable()
@JsonApiDatastoreConfig(config)
export class Datastore extends JsonApiDatastore {

  constructor(http: Http) {
    super(http);
  }

}
