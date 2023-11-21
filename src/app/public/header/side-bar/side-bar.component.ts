import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  getTipoPerfil(): number {
    return Number.parseInt(localStorage.getItem('tipoPerfil')||'0');
  }

  routerLink(ruta: string): void {
    this.router.navigate([`./pb/${ruta}`])
  }

}
