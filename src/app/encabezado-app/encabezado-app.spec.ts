import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EncabezadoApp } from './encabezado-app';

describe('EncabezadoApp', () => {
  let component: EncabezadoApp;
  let fixture: ComponentFixture<EncabezadoApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncabezadoApp],
    }).compileComponents();

    fixture = TestBed.createComponent(EncabezadoApp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
