import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomalilandComponent } from './somaliland.component';

describe('SomalilandComponent', () => {
  let component: SomalilandComponent;
  let fixture: ComponentFixture<SomalilandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomalilandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomalilandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
