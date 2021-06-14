import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersItemAWComponent } from './orders-item-aw.component';

describe('OrdersItemAWComponent', () => {
  let component: OrdersItemAWComponent;
  let fixture: ComponentFixture<OrdersItemAWComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersItemAWComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersItemAWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
