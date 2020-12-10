import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAcatComponent } from './detalle-acat.component';

describe('DetalleAcatComponent', () => {
  let component: DetalleAcatComponent;
  let fixture: ComponentFixture<DetalleAcatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleAcatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleAcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
