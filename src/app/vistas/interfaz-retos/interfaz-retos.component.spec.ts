import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfazRetosComponent } from './interfaz-retos.component';

describe('InterfazRetosComponent', () => {
  let component: InterfazRetosComponent;
  let fixture: ComponentFixture<InterfazRetosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfazRetosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfazRetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
