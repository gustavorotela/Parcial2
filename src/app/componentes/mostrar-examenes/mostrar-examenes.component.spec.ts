import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarExamenesComponent } from './mostrar-examenes.component';

describe('MostrarExamenesComponent', () => {
  let component: MostrarExamenesComponent;
  let fixture: ComponentFixture<MostrarExamenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarExamenesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarExamenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
