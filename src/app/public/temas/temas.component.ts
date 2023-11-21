import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActividadesService } from '../actividades/actividades.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalTemaComponent } from './modal-tema/modal-tema.component';

@Component({
  selector: 'app-temas',
  templateUrl: './temas.component.html',
  styleUrls: ['./temas.component.css'],
})
export class TemasComponent implements OnInit {

  formFiltrosTemas: FormGroup;

  dataTemas: any[] = [];
  displayedColumns = [
    'idTema',
    'asignatura',
    'unidad',
    'descripcion',
    'objetivo',
    'fechaInicio',
    'fechaTermino',
  ];

  listAsignatura: any[] = [];
  listUnidades: any[] = [];

  constructor(
    fb: FormBuilder,
    private service: ActividadesService,
    private dialog: MatDialog
  ) {
    this.formFiltrosTemas = fb.group({
      idAsignatura: [null, [Number]],
      idUnidad: [null, [Number]],
    });
    this.formFiltrosTemas.get('idAsignatura')?.valueChanges.subscribe({
      next: (id) => {
        this.formFiltrosTemas.get('idUnidad')?.patchValue(null);
        this.getUnidades(id);
      },
    });
    this.formFiltrosTemas.get('idUnidad')?.valueChanges.subscribe({
      next: (id) => {
        this.getTemas(id);
      },
    });
  }

  ngOnInit(): void {
    this.service.getListAsignaturas().then((success) => {
      this.listAsignatura = success;
    });
  }

  getUnidades(idAsignatura: number | null): void {
    this.listUnidades = [];
    if (idAsignatura) {
      this.service.getListUnidades(idAsignatura).then((success) => {
        this.listUnidades = success;
      });
    }
  }

  getTemas(idUnidad: number | null): void {
    this.dataTemas = [];
    if (idUnidad) {
      this.service.getListTemas(idUnidad).then((success) => {
        this.dataTemas = success;
      });
    }
  }

  openModalAgregar(): void {
    const dialogoUnidad = this.dialog.open(ModalTemaComponent, {
      width: '80%',
      height: 'auto',
    });
    dialogoUnidad.afterClosed().subscribe({
      next: (data) => {
        if (data) {
          console.info(data);
        }
      },
    });
  }
}
