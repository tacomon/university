import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-float',
  templateUrl: './card-float.component.html',
  styleUrls: ['./card-float.component.css']
})
export class CardFloatComponent implements OnInit {

  @Input() titulo: string;
  @Input() valor: number|null;

  constructor() {
    this.titulo = '';
    this.valor = 0;
  }

  ngOnInit(): void {
  }

}
