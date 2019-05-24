import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteparentComponent } from './noteparent.component';

describe('NoteparentComponent', () => {
  let component: NoteparentComponent;
  let fixture: ComponentFixture<NoteparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
