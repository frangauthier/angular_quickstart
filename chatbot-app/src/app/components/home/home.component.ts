import { Component, OnInit } from '@angular/core';
import { iCar } from 'src/app/interfaces/iCar';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cars: any[] = []
  
  constructor(
    private rentalService: RentalService
  ) { }

  ngOnInit(): void {
    this.rentalService.cars$.subscribe(cars => {
      console.log('cars: ', cars);
      this.cars = cars;
    })
  }

  filterCars(cars: iCar[]) {
    return cars.filter((car) => {
      return !car.inRental
    })
  }

}
