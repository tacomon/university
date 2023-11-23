import { Component, OnInit } from '@angular/core';
import { ActividadesService } from '../actividades.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-modal-actividad',
  templateUrl: './modal-actividad.component.html',
  styleUrls: ['./modal-actividad.component.css'],
})
export class ModalActividadComponent implements OnInit {
  titulo = 'Alta de Actividad';

  formActividad: FormGroup;
  ctrlArchivo = new FormControl();

  listAsignatura: any[] = [];
  listUnidad: any[] = [];
  listTema: any[] = [];

  constructor(
    fb: FormBuilder,
    private service: ActividadesService,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<ModalActividadComponent>
  ) {
    this.formActividad = fb.group({
      idAsignatura: [null, [Number]],
      idUnidad: [null, [Number]],
      idTema: [null, [Number]],
      titulo: [null, [Number]],
      fechaInicio: [null, [Number]],
      fechaEntrega: [null, [Number]],
      anexos: [[], []],
    });
    this.formActividad.get('idAsignatura')?.valueChanges.subscribe({
      next: (id) => {
        this.formActividad.get('idUnidad')?.patchValue(null);
        this.getUnidades(id);
      },
    });
    this.formActividad.get('idUnidad')?.valueChanges.subscribe({
      next: (id) => {
        this.formActividad.get('idTema')?.patchValue(null);
        this.getTemas(id);
      },
    });
    this.ctrlArchivo.valueChanges.subscribe({
      next: (value) => {
        if (value) {
          console.info(value);
          this.agregarAnexo(value);
        }
      },
    });
  }

  async agregarAnexo(file: any) {
    const { archivoBase64, filename } = await this.toBase64(file);

    this.formActividad
      .get('anexos')
      ?.value.push({ nombre: filename, file: (archivoBase64.split(',')[1]) });
  }

  toFile(archivoBase64: any, filename: string) {
    const nombre = filename.split('.');
    const bstr = atob(archivoBase64?.split(',')[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], nombre[0], { type: nombre[1] });
  }

  toBase64(file: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      const input: any = document.querySelector('#inputFileAnexo');
      reader.readAsDataURL(input.files[0]);
      reader.onload = () =>
        resolve({
          archivoBase64: reader.result,
          filename: input?.files[0]?.name,
        });
      reader.onerror = reject;
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

  getTemas(idUnidad: number | null): void {
    this.listTema = [];
    if (idUnidad) {
      this.service.getListTemas(idUnidad).then((success) => {
        this.listTema = success;
      });
    }
  }

  formValue() {
    // alta de actividad
    const value = this.formActividad.value;
    const parametros = {
      idTema: value.idTema,
      titulo: value.titulo,
      fechaInicio: value.fechaInicio,
      fechaEntrega: value.fechaEntrega,
      anexos: value.anexos,
    };
    this.service.insertActividad(parametros).then(
      (success) => {
        console.info(success);
        this.dialogRef.close(true);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
