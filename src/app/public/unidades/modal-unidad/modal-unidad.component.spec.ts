import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUnidadComponent } from './modal-unidad.component';

describe('ModalUnidadComponent', () => {
  let component: ModalUnidadComponent;
  let fixture: ComponentFixture<ModalUnidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalUnidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalUnidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
