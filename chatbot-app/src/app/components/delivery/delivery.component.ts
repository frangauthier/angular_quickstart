import { Component, OnInit } from '@angular/core';
import { DeliveryService, deliveryStatus } from 'src/app/services/delivery.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {

  deliveriesArray: any[] = [];

  constructor(
    private deliveryService: DeliveryService,
  ) { }

  ngOnInit(): void {
    this.deliveryService.deliveries.subscribe((deliveries) => {
      this.deliveriesArray = deliveries
    })
  }

  onClickAddNewDelivery() {
    console.log('click')
    this.deliveryService.addNewDelivery();
  }

  valueOf(status: deliveryStatus) {
    if(status === deliveryStatus.placed){
      return 33;
    } else if(status === deliveryStatus.transit) {
      return 66;
    }
    return 100;
  }

}
