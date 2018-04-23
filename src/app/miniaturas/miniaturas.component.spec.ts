import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniaturasComponent } from './miniaturas.component';

describe('MiniaturasComponent', () => {
  let component: MiniaturasComponent;
  let fixture: ComponentFixture<MiniaturasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniaturasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniaturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
