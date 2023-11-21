import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalActividadComponent } from './modal-actividad.component';

describe('ModalActividadComponent', () => {
  let component: ModalActividadComponent;
  let fixture: ComponentFixture<ModalActividadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalActividadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
