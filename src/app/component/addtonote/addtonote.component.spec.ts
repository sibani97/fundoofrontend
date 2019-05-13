import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtonoteComponent } from './addtonote.component';

describe('AddtonoteComponent', () => {
  let component: AddtonoteComponent;
  let fixture: ComponentFixture<AddtonoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtonoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtonoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
