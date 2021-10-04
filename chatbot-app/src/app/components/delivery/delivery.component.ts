import { Component, OnInit } from '@angular/core';
import { DeliveryService } from 'src/app/services/delivery.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {

  deliveries: any[] = []

  constructor(
    private deliveryService: DeliveryService
  ) { }

  ngOnInit(): void {
    this.deliveryService.deliveries.subscribe((deliveries) => {
      this.deliveries = deliveries
    })
  }

  addNewDelivery() {
    console.log('NEW')
    this.deliveryService.addNewDelivery();
  }

}
