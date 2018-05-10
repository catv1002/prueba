import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service'
import { Observable } from 'rxjs/Observable';
import { Router, NavigationExtras } from '@angular/router'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public objects;

  constructor(
    public dbService: DatabaseService,
    private router: Router
  ) { }

  ngOnInit() {
    let lista: Observable<any[]>;
    lista = this.dbService.getData('/objetos');
    lista.forEach(element => {
      this.objects = element;
    });
  }

  goToObject(listPath: string, url: string) {
    this.router.navigate(['objeto', { lista: listPath, img: url }]);
    console.log(listPath);
  }


}
