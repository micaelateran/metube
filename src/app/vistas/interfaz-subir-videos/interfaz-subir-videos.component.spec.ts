import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfazSubirVideosComponent } from './interfaz-subir-videos.component';

describe('InterfazSubirVideosComponent', () => {
  let component: InterfazSubirVideosComponent;
  let fixture: ComponentFixture<InterfazSubirVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfazSubirVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfazSubirVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
