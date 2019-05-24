import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnArchiveComponent } from './un-archive.component';

describe('UnArchiveComponent', () => {
  let component: UnArchiveComponent;
  let fixture: ComponentFixture<UnArchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnArchiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
