import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActividadesService } from '../actividades/actividades.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalUnidadComponent } from './modal-unidad/modal-unidad.component';

@Component({
  selector: 'app-unidades',
  templateUrl: './unidades.component.html',
  styleUrls: ['./unidades.component.css']
})
export class UnidadesComponent implements OnInit {

  formFiltrosUnidades: FormGroup;

  dataUnidades: any[] = [];
  displayedColumns = ['idUnidad', 'descripcion', 'asignatura', 'fechaInicio', 'fechaFin'];

  listAsignatura: any[] = [];

  constructor(fb: FormBuilder, private service: ActividadesService, private dialog: MatDialog) {
    this.formFiltrosUnidades = fb.group({
      idAsignatura: [null, [Number]]
    });
    this.formFiltrosUnidades.get('idAsignatura')?.valueChanges.subscribe({
      next: (id) => {
        this.getUnidades(id)
      }
    });
  }

  ngOnInit(): void {
    this.service.getListAsignaturas().then(
      (success) => {
        this.listAsignatura = success;
      }
    )
  }

  getUnidades(idAsignatura: number|null): void {
    this.dataUnidades = [];
    if(idAsignatura) {
      this.service.getListUnidades(idAsignatura).then(
        (success) => {
          this.dataUnidades = success
          // .map(unidad => {
          //   return {
          //     descripcion: unidad.descripcion,
          //     asignatura: unidad.asignatura,
          //     fechaInicio: unidad.fechaInicio,
          //     fechaFin: unidad.fechaFin,
          //     idUnidad: unidad.orden
          //   }
          // });
        }
      )
    }
  }

  openModalAgregar(): void {
    const dialogoUnidad = this.dialog.open(ModalUnidadComponent, {
      width: '80%', height: 'auto'
    });
    dialogoUnidad.afterClosed().subscribe({
      next: (data) => {
        if(data) {
          console.info(data)
          this.ngOnInit();
        }
      }
    })
  }

}
