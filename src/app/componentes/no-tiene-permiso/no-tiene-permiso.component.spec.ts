import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoTienePermisoComponent } from './no-tiene-permiso.component';

describe('NoTienePermisoComponent', () => {
  let component: NoTienePermisoComponent;
  let fixture: ComponentFixture<NoTienePermisoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoTienePermisoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoTienePermisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
