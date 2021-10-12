import { Component, OnInit } from '@angular/core';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  cars: any[] = []
  rentals: any[] = []

  constructor(
    private rentalService: RentalService
  ) { }

  ngOnInit(): void {
    this.rentalService.cars$.subscribe(cars => {
      console.log('cars: ', cars);
      this.cars = cars;
    })

    this.rentalService.rentals$.subscribe(rentals => {
      console.log('rentals: ', rentals);
      this.rentals = rentals;
    })
  }

}
