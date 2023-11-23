import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActividadesService } from '../actividades.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-calificar',
  templateUrl: './calificar.component.html',
  styleUrls: ['./calificar.component.css'],
})
export class CalificarComponent implements OnInit {
  titulo = '';

  formCalificar: FormGroup;

  listAsignatura: any[] = [];
  listUnidad: any[] = [];
  listTema: any[] = [];

  constructor(fb: FormBuilder, private service: ActividadesService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CalificarComponent>) {
    this.formCalificar = fb.group({
      idAsignatura: [null, [Number]],
      idUnidad: [null, [Number]],
      idTema: [null, [Number]],
      titulo: [null, [Number]],
      entregable: [null, [Number]],
      alumno: [null, [Number]],
      calificacion: [null, [Number]],
      retroalimentacion: [null, [Number]],
    });
  }

  ngOnInit(): void {
    console.info(this.data)
    this.service.getListAsignaturas().then(
      (success) => {
        this.listAsignatura = success
      }
    )
    this.getUnidades(this.data.formCalificar.idTema);
    this.getTemas(this.data.formCalificar.idUnidad);
    this.formCalificar.patchValue(this.data.formCalificar)
  }

  getUnidades(idAsignatura: number): void {
    this.listUnidad = [];
    if (idAsignatura) {
      this.service.getListUnidades(idAsignatura).then((success) => {
        this.listUnidad = success;
      });
    }
  }

  getTemas(idAsignatura: number): void {
    this.listTema = [];
    if (idAsignatura) {
      this.service.getListTemas(idAsignatura).then((success) => {
        this.listTema = success;
      });
    }
  }

  calificar(): void {
    console.info('calificar')
    console.info(this.formCalificar.value)
    const parametros = {
      calificacion: this.formCalificar.value.calificacion,
      retroalimentacion: this.formCalificar.value.retroalimentacion,
      correo: this.data.formCalificar.correo,
      id: this.data.formCalificar.id,
    };
    this.service.calificar(parametros).then(
      (success) => {
        this.dialogRef.close(true)
      }
    )

  }

}
