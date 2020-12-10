import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarActasComponent } from './mostrar-actas.component';

describe('MostrarActasComponent', () => {
  let component: MostrarActasComponent;
  let fixture: ComponentFixture<MostrarActasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarActasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarActasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
