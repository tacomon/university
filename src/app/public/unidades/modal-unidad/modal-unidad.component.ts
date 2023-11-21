import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActividadesService } from '../../actividades/actividades.service';
import { DatePipe } from '@angular/common';

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

  constructor(fb: FormBuilder, private service: ActividadesService, private datePipe: DatePipe) {
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
    return {
      idAsignatura: values.idAsignatura,
      descripcion: values.descripcion,
      fechaInicio: this.datePipe.transform(values.fechaInicio, 'dd/MM/yyyy'),
      fechaFin: this.datePipe.transform(values.fechaFin, 'dd/MM/yyyy'),
    }
  }

}
