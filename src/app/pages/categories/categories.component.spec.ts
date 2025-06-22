import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriesComponent } from './categories.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('CategoriesComponent', () => {
  function setupWithParam(param: string) {
    TestBed.resetTestingModule();

    TestBed.configureTestingModule({
      imports: [CategoriesComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({
              get: (key: string) => (key === 'category' ? param : null)
            })
          }
        }
      ]
    }).compileComponents();

    const fixture = TestBed.createComponent(CategoriesComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    return { fixture, component };
  }

  it('debería cargar datos de juegos-casuales', () => {
    const { fixture, component } = setupWithParam('juegos-casuales');
    const compiled = fixture.nativeElement as HTMLElement;

    const title = compiled.querySelector('.site-title')?.textContent;
    const subtitle = compiled.querySelector('.site-subtitle')?.textContent;

    expect(title).toContain('Juegos Casuales');
    expect(subtitle).toContain('Relájate con estos títulos casuales');
    expect(component.data.items.length).toBeGreaterThan(0);
  });

  it('debería cargar datos de tcg', () => {
    const { fixture, component } = setupWithParam('tcg');
    const compiled = fixture.nativeElement as HTMLElement;

    const title = compiled.querySelector('.site-title')?.textContent;
    const subtitle = compiled.querySelector('.site-subtitle')?.textContent;

    expect(title).toContain('Trading Card Gaming');
    expect(subtitle).toContain('Juegos de cartas coleccionables');
    expect(component.data.items.length).toBeGreaterThan(0);
  });

  it('debería cargar datos de juegos-estrategia', () => {
    const { fixture, component } = setupWithParam('juegos-estrategia');
    const compiled = fixture.nativeElement as HTMLElement;

    const title = compiled.querySelector('.site-title')?.textContent;
    const subtitle = compiled.querySelector('.site-subtitle')?.textContent;

    expect(title).toContain('Juegos de Estrategia');
    expect(subtitle).toContain('Juegos para pensar y actuar con conocimiento de causa');
    expect(component.data.items.length).toBeGreaterThan(0);
  });

  it('debería cargar datos de accesorios', () => {
    const { fixture, component } = setupWithParam('accesorios');
    const compiled = fixture.nativeElement as HTMLElement;

    const title = compiled.querySelector('.site-title')?.textContent;
    const subtitle = compiled.querySelector('.site-subtitle')?.textContent;

    expect(title).toContain('Accesorios');
    expect(subtitle).toContain('Elementos dignos de un verdadero jugador');
    expect(component.data.items.length).toBeGreaterThan(0);
  });

  it('debería manejar categoría no válida', () => {
    const { component } = setupWithParam('no-existe');
    expect(component.data.title).toBe('Categoría no encontrada');
    expect(component.data.items.length).toBe(0);
  });
});
