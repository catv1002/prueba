import { Component, OnInit, Input } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Tarjeta} from '../../models/hero';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input("datos") dato:Tarjeta;

  constructor() { }

}
