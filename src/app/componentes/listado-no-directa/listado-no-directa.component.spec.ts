import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoNoDirectaComponent } from './listado-no-directa.component';

describe('ListadoNoDirectaComponent', () => {
  let component: ListadoNoDirectaComponent;
  let fixture: ComponentFixture<ListadoNoDirectaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoNoDirectaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoNoDirectaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
