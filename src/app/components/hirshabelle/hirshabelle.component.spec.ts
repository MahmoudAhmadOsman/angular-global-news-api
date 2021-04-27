import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HirshabelleComponent } from './hirshabelle.component';

describe('HirshabelleComponent', () => {
  let component: HirshabelleComponent;
  let fixture: ComponentFixture<HirshabelleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HirshabelleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HirshabelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
