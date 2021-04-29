import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalmudugComponent } from './galmudug.component';

describe('GalmudugComponent', () => {
  let component: GalmudugComponent;
  let fixture: ComponentFixture<GalmudugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalmudugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalmudugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
