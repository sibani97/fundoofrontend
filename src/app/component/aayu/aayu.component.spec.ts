import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AayuComponent } from './aayu.component';

describe('AayuComponent', () => {
  let component: AayuComponent;
  let fixture: ComponentFixture<AayuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AayuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AayuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
