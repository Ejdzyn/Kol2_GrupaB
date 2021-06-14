import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersAWComponent } from './orders-aw.component';

describe('OrdersAWComponent', () => {
  let component: OrdersAWComponent;
  let fixture: ComponentFixture<OrdersAWComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersAWComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersAWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
