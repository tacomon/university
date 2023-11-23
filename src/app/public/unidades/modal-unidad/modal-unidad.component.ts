import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActividadesService } from '../../actividades/actividades.service';
import { DatePipe } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-unidad',
  templateUrl: './modal-unidad.component.html',
  styleUrls: ['./modal-unidad.component.css']
})
export class ModalUnidadComponent implements OnInit {

  titulo = 'Alta de Unidad';

  formUnidad: FormGroup;

  newDate = new Date(2023,11,12)

  listAsignatura: any[] = [];

  constructor(fb: FormBuilder, private service: ActividadesService, private datePipe: DatePipe,
    public dialogRef: MatDialogRef<ModalUnidadComponent>) {
    this.formUnidad = fb.group({
      idAsignatura: [],
      descripcion: [],
      fechaInicio: [],
      fechaFin: []
    });
  }

  ngOnInit(): void {
    this.service.getListAsignaturas().then(
      (success) => {
        this.listAsignatura = success
      }
    )
  }

  formValue(): any {
    const values = this.formUnidad.value;
    this.service.insertUnidad({
      idAsignatura: values.idAsignatura,
      descripcion: values.descripcion,
      fechaInicio: this.datePipe.transform(values.fechaInicio, 'yyyy-MM-dd'),
      fechaFin: this.datePipe.transform(values.fechaFin, 'yyyy-MM-dd'),
    }).then(success => {
      console.info(success);
      this.dialogRef.close(true);
    }, (error) => {
      console.error(error)
      this.dialogRef.close(false);
    });

  }

}
