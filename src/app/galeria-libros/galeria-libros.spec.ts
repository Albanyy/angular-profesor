import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GaleriaLibros } from './galeria-libros';

describe('GaleriaLibros', () => {
  let component: GaleriaLibros;
  let fixture: ComponentFixture<GaleriaLibros>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GaleriaLibros],
    }).compileComponents();

    fixture = TestBed.createComponent(GaleriaLibros);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
