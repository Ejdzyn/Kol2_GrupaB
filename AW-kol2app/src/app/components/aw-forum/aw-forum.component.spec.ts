import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AWForumComponent } from './aw-forum.component';

describe('AWForumComponent', () => {
  let component: AWForumComponent;
  let fixture: ComponentFixture<AWForumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AWForumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AWForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
