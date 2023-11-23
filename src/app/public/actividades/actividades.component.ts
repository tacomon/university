import { Component, OnInit } from '@angular/core';
import { ActividadesService } from './actividades.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CalificarComponent } from './calificar/calificar.component';
import { ModalActividadComponent } from './modal-actividad/modal-actividad.component';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css'],
})
export class ActividadesComponent implements OnInit {
  formFiltrosAvtividades: FormGroup;

  selection = new SelectionModel<any>(false, []);
  dataAlumnos = new MatTableDataSource<any>([]);
  displayedColumnsAlumno: string[] = [
    'alumno',
    'fechaEntrega',
    'entregable',
    'options',
  ];
  dataActividades: any[] = [];
  displayedColumns: string[] = [
    'select',
    'idActividad',
    'titulo',
    'idAsignatura',
    'idTema',
    'fechaInicio',
    'fechaEntrega',
    // 'options',
  ];

  listAsignatura: any[] = [];
  listUnidad: any[] = [];
  listTema: any[] = [];

  actividadSelected: any = null;

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
            // idAsignatura:
            //   this.formFiltrosAvtividades.get('idAsignatura')?.value,
            // idUnidad: this.formFiltrosAvtividades.get('idUnidad')?.value,
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
    this.selection.changed.subscribe({
      next: (val) => {
        console.info(val);
        this.actividadSelected = null;
        const selected = val.source.selected;
        if (selected.length > 0) {
          this.actividadSelected = selected[0];
          this.getAlumnos(selected[0].idActividad);
        }
      },
    });
  }

  getAlumnos(idActividad: number) {
    this.dashboardService.getAlumnos(idActividad).then((success) => {
      this.dataAlumnos.data = success;
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
      width: '80%',
      height: 'auto',
      data: {
        formCalificar: actividad,
      },
    });
  }

  openModalAgregar(): void {
    const dialogCalificar = this.dialog.open(ModalActividadComponent, {
      width: '80%',
      height: 'auto',
    });
    dialogCalificar.afterClosed().subscribe({
      next: (value) => {
        if (value) {
          console.log(value);
        }
      },
    });
  }

  checkboxLabel(row?: any): string {
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.position + 1
    }`;
  }

  createLink(file: string, filename: string) {
    if(filename.match(/\.(pdf)$/)) {
      const archivo = this.dataURLtoFile(file, filename);
      const url = URL.createObjectURL(new Blob(archivo, { type: 'application/pdf' }));
      window.open(url, '_blank')
      return url;
    } else {
      // download

      return
    }
  }

  dataURLtoFile(file: string, filename: string) {
    const nombre = filename.split('.');
    // const arr = dataurl.split(',');
    // const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(file);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    console.log(new File([u8arr], nombre[0], { type: nombre[1] }));
    return [u8arr];
  }
}
