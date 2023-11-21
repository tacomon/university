import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { TemasComponent } from './temas.component';
import { TemasRoutingModule } from './temas-routing.module';
import { ModalTemaComponent } from './modal-tema/modal-tema.component';



@NgModule({
  declarations: [
    TemasComponent,
    ModalTemaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TemasRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatIconModule
  ],
  exports: [
    TemasComponent
  ]
})
export class TemasModule { }
