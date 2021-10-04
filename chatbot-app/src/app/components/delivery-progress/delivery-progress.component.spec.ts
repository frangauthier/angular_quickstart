import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryProgressComponent } from './delivery-progress.component';

describe('DeliveryProgressComponent', () => {
  let component: DeliveryProgressComponent;
  let fixture: ComponentFixture<DeliveryProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
