import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDetailsAWComponent } from './orders-details-aw.component';

describe('OrdersDetailsAWComponent', () => {
  let component: OrdersDetailsAWComponent;
  let fixture: ComponentFixture<OrdersDetailsAWComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersDetailsAWComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDetailsAWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
