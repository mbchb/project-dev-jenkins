import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaSollutionComponent } from './la-sollution.component';

describe('LaSollutionComponent', () => {
  let component: LaSollutionComponent;
  let fixture: ComponentFixture<LaSollutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaSollutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaSollutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
