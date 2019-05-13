import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IspinComponent } from './ispin.component';

describe('IspinComponent', () => {
  let component: IspinComponent;
  let fixture: ComponentFixture<IspinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IspinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IspinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
