import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoDeAsignaturasComponent } from './listado-de-asignaturas.component';

describe('ListadoDeAsignaturasComponent', () => {
  let component: ListadoDeAsignaturasComponent;
  let fixture: ComponentFixture<ListadoDeAsignaturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoDeAsignaturasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoDeAsignaturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
