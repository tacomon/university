import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { PublicComponent } from '../public/public.component';
import { SideBarModule } from './header/side-bar/side-bar.module';
import { TopBarModule } from './header/top-bar/top-bar.module';
import { PublicRoutingModule } from './public-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PublicComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PublicRoutingModule,
    SideBarModule,
    TopBarModule,
    FormsModule
  ],
  exports: [
    PublicComponent
  ],
  providers: [
    DatePipe
  ]
})
export class PublicModule { }
