import { Component, Input, OnInit } from '@angular/core';
import { deliveryStatus, iDelivery } from 'src/app/services/delivery.service';

@Component({
  selector: 'app-delivery-progress',
  templateUrl: './delivery-progress.component.html',
  styleUrls: ['./delivery-progress.component.css']
})
export class DeliveryProgressComponent implements OnInit {

  @Input() delivery: iDelivery | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  valueOf(delivery: iDelivery | null) {
    let value = 0;
    if(!delivery) return value;
    if(delivery.status === deliveryStatus.placed){
      value = 33
    } else if (delivery.status === deliveryStatus.transit){
      value = 66
    } else {
      value = 100
    }
    return value;
  }

}
