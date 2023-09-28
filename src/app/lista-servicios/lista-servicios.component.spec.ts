import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceListComponent } from './lista-servicios.component';

describe('ListaServiciosComponent', () => {
  let component: ServiceListComponent;
  let fixture: ComponentFixture<ServiceListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceListComponent]
    });
    fixture = TestBed.createComponent(ServiceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
