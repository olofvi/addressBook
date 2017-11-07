import { JsonApiDatastoreConfig, JsonApiDatastore, DatastoreConfig } from 'angular2-jsonapi';
import { AppComponent } from './app.component';



const config: DatastoreConfig = {
  baseUrl: 'https://ca-address-book.herokuapp.com/api/contacts',
  data: {
    id: any,
    type: contacts,
    attributes: {}
  }

  constructor(http: Http) {
    super(http);
  }

@Injectable()
@JsonApiDatastoreConfig(config)
export class Datastore extends JsonApiDatastore {

  @Attribute()
  name: string;

  @Attribute()
  email: string;

  @Attribute()
  info: string;
}

  constructor(private datastore: Datastore) { }

  getData(){
    this.datastore.findAll(data, {
      page: { size: 10, number: 1}
    }).subscribe(
      (data: Data[]) => console.log(data)
    );
  }
