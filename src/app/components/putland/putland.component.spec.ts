import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PutlandComponent } from './putland.component';

describe('PutlandComponent', () => {
  let component: PutlandComponent;
  let fixture: ComponentFixture<PutlandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PutlandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PutlandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
