import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  matricula: string;

  constructor() {
    this.matricula = localStorage.getItem('matricula')||'matriculaDefault';
  }

  ngOnInit(): void {
  }

}
