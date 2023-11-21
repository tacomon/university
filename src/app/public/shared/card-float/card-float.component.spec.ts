import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFloatComponent } from './card-float.component';

describe('CardFloatComponent', () => {
  let component: CardFloatComponent;
  let fixture: ComponentFixture<CardFloatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardFloatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFloatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
