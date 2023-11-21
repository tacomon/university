import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTemaComponent } from './modal-tema.component';

describe('ModalTemaComponent', () => {
  let component: ModalTemaComponent;
  let fixture: ComponentFixture<ModalTemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalTemaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalTemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
