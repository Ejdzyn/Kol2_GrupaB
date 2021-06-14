import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AWForumDetailsComponent } from './aw-forum-details.component';

describe('AWForumDetailsComponent', () => {
  let component: AWForumDetailsComponent;
  let fixture: ComponentFixture<AWForumDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AWForumDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AWForumDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
