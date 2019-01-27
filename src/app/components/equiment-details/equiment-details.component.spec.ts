import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquimentDetailsComponent } from './equiment-details.component';

describe('EquimentDetailsComponent', () => {
  let component: EquimentDetailsComponent;
  let fixture: ComponentFixture<EquimentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquimentDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquimentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
