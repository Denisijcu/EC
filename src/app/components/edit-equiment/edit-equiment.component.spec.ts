import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEquimentComponent } from './edit-equiment.component';

describe('EditEquimentComponent', () => {
  let component: EditEquimentComponent;
  let fixture: ComponentFixture<EditEquimentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEquimentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEquimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
