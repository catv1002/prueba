import { Component, OnInit, Input } from '@angular/core';
import { DatabaseService } from '../../services/database.service'
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input("objLista") object;
  public lista: any;
  constructor(public db: DatabaseService) {}
  ngOnInit() {
    let avengersList: Observable<any[]>;
    avengersList = this.db.getData(this.object.lista);
    this.lista = avengersList.forEach(items => {
      this.lista = items;
    });
  }

}
