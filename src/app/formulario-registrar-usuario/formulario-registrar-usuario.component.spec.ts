import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioRegistrarUsuarioComponent } from './formulario-registrar-usuario.component';

describe('FormularioRegistrarUsuarioComponent', () => {
  let component: FormularioRegistrarUsuarioComponent;
  let fixture: ComponentFixture<FormularioRegistrarUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioRegistrarUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioRegistrarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
