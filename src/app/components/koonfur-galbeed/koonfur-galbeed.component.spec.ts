import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KoonfurGalbeedComponent } from './koonfur-galbeed.component';

describe('KoonfurGalbeedComponent', () => {
  let component: KoonfurGalbeedComponent;
  let fixture: ComponentFixture<KoonfurGalbeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KoonfurGalbeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KoonfurGalbeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
