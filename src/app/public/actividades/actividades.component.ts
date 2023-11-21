import { Component, OnInit } from '@angular/core';
import { ActividadesService } from './actividades.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CalificarComponent } from './calificar/calificar.component';
import { ModalActividadComponent } from './modal-actividad/modal-actividad.component';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css'],
})
export class ActividadesComponent implements OnInit {
  formFiltrosAvtividades: FormGroup;

  dataActividades: any[] = [];
  displayedColumns: string[] = [
    'idActividad',
    'titulo',
    'idAsignatura',
    'idTema',
    'fechaInicio',
    'fechaEntrega',
    'options',
  ];

  listAsignatura: any[] = [];
  listUnidad: any[] = [];
  listTema: any[] = [];

  constructor(
    private dashboardService: ActividadesService,
    fb: FormBuilder,
    private dialog: MatDialog
  ) {
    this.formFiltrosAvtividades = fb.group({
      idAsignatura: [null, [Number]],
      idUnidad: [null],
      idTema: [null],
    });
    this.formFiltrosAvtividades.get('idAsignatura')?.valueChanges.subscribe({
      next: (id) => {
        this.formFiltrosAvtividades.get('idUnidad')?.patchValue(null);
        this.getUnidades(id);
      },
    });
    this.formFiltrosAvtividades.get('idUnidad')?.valueChanges.subscribe({
      next: (id) => {
        this.formFiltrosAvtividades.get('idTema')?.patchValue(null);
        this.getTemas(id);
      },
    });
    this.formFiltrosAvtividades.get('idTema')?.valueChanges.subscribe({
      next: (id) => {
        if (id) {
          this.getActividades({
            idAsignatura:
              this.formFiltrosAvtividades.get('idAsignatura')?.value,
            idUnidad: this.formFiltrosAvtividades.get('idUnidad')?.value,
            idTema: id,
          });
        }
      },
    });
  }

  ngOnInit(): void {
    this.dashboardService.getListAsignaturas().then((success) => {
      this.listAsignatura = success;
    });
  }

  getUnidades(idAsignatura: number): void {
    this.listUnidad = [];
    if (idAsignatura) {
      this.dashboardService.getListUnidades(idAsignatura).then((success) => {
        this.listUnidad = success;
      });
    }
  }

  getTemas(idAsignatura: number): void {
    this.listTema = [];
    if (idAsignatura) {
      this.dashboardService.getListTemas(idAsignatura).then((success) => {
        this.listTema = success;
      });
    }
  }

  getActividades(filtros: any): void {
    console.log('filtros');
    console.log(filtros);
    this.dataActividades = [];
    this.dashboardService.getActividades(filtros).then((success) => {
      this.dataActividades = success;
    });
  }

  openModalModificacion(actividad: any) {
    console.info(actividad);
    const dialogCalificar = this.dialog.open(CalificarComponent, {
      width: '80%', height: 'auto',
      data: {
        formCalificar: actividad,
      }
    });
  }

  openModalAgregar(): void {
    const dialogCalificar = this.dialog.open(ModalActividadComponent, {
      width: '80%',
      height: 'auto',
    });
    dialogCalificar.afterClosed().subscribe({
      next: (value) => {
        if(value) {
          console.log(value)
        }
      }
    })
  }

}
