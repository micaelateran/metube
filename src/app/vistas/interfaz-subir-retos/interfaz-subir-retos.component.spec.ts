import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfazSubirRetosComponent } from './interfaz-subir-retos.component';

describe('InterfazSubirRetosComponent', () => {
  let component: InterfazSubirRetosComponent;
  let fixture: ComponentFixture<InterfazSubirRetosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfazSubirRetosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfazSubirRetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
