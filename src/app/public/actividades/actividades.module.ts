import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ActividadesComponent } from './actividades.component';
import { CardFloatModule } from '../shared/card-float/card-float.module';
import { ActividadesRoutingModule } from './actividades-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { CalificarComponent } from './calificar/calificar.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { ModalActividadComponent } from './modal-actividad/modal-actividad.component';

@NgModule({
  declarations: [ActividadesComponent, CalificarComponent, ModalActividadComponent],
  imports: [
    CommonModule,
    ActividadesRoutingModule,
    CardFloatModule,
    ReactiveFormsModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [ActividadesComponent],
})
export class ActividadesModule {}
