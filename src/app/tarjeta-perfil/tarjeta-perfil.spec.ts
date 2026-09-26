import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TarjetaPerfil } from './tarjeta-perfil';

describe('TarjetaPerfil', () => {
  let component: TarjetaPerfil;
  let fixture: ComponentFixture<TarjetaPerfil>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaPerfil],
    }).compileComponents();

    fixture = TestBed.createComponent(TarjetaPerfil);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
