import { Injectable } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DatabaseService {

  constructor(
    public db: AngularFireDatabase
  ) { }

  getData(listpath):Observable <any[]>{
    return this.db.list(listpath).valueChanges();
  }
}
