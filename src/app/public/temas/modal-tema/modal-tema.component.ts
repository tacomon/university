import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActividadesService } from '../../actividades/actividades.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-modal-tema',
  templateUrl: './modal-tema.component.html',
  styleUrls: ['./modal-tema.component.css'],
})
export class ModalTemaComponent implements OnInit {
  titulo = 'Alta de Unidad';

  formTema: FormGroup;

  newDate = new Date(2023, 11, 12);

  listAsignatura: any[] = [];
  listUnidad: any[] = [];

  constructor(
    fb: FormBuilder,
    private service: ActividadesService,
    private datePipe: DatePipe
  ) {
    this.formTema = fb.group({
      idAsignatura: [],
      idUnidad: [],
      descripcion: [],
      objetivo: [],
      fechaInicio: [],
      fechaTermino: [],
    });
    this.formTema.get('idAsignatura')?.valueChanges.subscribe({
      next: (id) => {
        this.formTema.get('idUnidad')?.patchValue(null);
        this.getUnidades(id);
      },
    });
  }

  ngOnInit(): void {
    this.service.getListAsignaturas().then((success) => {
      this.listAsignatura = success;
    });
  }

  getUnidades(idAsignatura: number | null): void {
    this.listUnidad = [];
    if (idAsignatura) {
      this.service.getListUnidades(idAsignatura).then((success) => {
        this.listUnidad = success;
      });
    }
  }

  formValue(): any {
    const values = this.formTema.value;
    return {
      idAsignatura: values.idAsignatura,
      idUnidad: values.idUnidad,
      descripcion: values.descripcion,
      objetivo: values.objetivo,
      fechaInicio: this.datePipe.transform(values.fechaInicio, 'dd/MM/yyyy'),
      fechaTermino: this.datePipe.transform(values.fechaTermino, 'dd/MM/yyyy'),
    };
  }
}
