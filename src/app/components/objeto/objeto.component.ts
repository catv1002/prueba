import { Component, OnInit, Input } from '@angular/core';
import { DatabaseService } from '../../services/database.service'
import { Object } from '../../models/object'
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'app-objeto',
  templateUrl: './objeto.component.html',
  styleUrls: ['./objeto.component.css']
})
export class ObjetoComponent implements OnInit {

  objects: any;
  listPath: string;
  url:string;

  constructor(
    public dbService: DatabaseService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    let self = this;
    this.route.params.subscribe(params =>self.listPath =  params['lista']);
    this.route.params.subscribe(params =>self.url =  params['img']);

    console.log(this.listPath);
    console.log(this.url);
    this.dbService.getData(this.listPath).forEach(element => {
      console.log(element);
      this.objects = element;
    });
  }



}

