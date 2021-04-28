import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JubalandComponent } from './jubaland.component';

describe('JubalandComponent', () => {
  let component: JubalandComponent;
  let fixture: ComponentFixture<JubalandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JubalandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JubalandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
