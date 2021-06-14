import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AWForumItemsComponent } from './aw-forum-items.component';

describe('AWForumItemsComponent', () => {
  let component: AWForumItemsComponent;
  let fixture: ComponentFixture<AWForumItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AWForumItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AWForumItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
