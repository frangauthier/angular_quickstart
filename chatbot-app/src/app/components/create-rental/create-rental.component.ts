import { Component, OnInit } from '@angular/core';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-create-rental',
  templateUrl: './create-rental.component.html',
  styleUrls: ['./create-rental.component.css']
})
export class CreateRentalComponent implements OnInit {

  carsAvailable: any[] = [];
  carSelected:any;

  startTime: any = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
  };

  endTime: any = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate() + 1,
  };

  constructor(
    private rentalService: RentalService
  ) { }

  ngOnInit(): void {
    this.rentalService.cars$.subscribe(cars => {
      this.carsAvailable = cars.filter(car => !car.inRental)
    })
  }

  onCreateRentalClick() {
    if(this.startTime && this.endTime && this.carSelected){
      const newRental = {
        startTime: this.convertDatepickedToDate(this.startTime),
        endTime: this.convertDatepickedToDate(this.endTime),
        carId: this.carSelected.carId,
      }
      console.log('newRental: ', newRental);
      this.rentalService.createNewRental(newRental).subscribe(result => {
        console.log('SUCCESS')
      });
    }
    console.log('this.startTime: ', this.startTime);
    console.log('this.carSelected: ', this.carSelected);
  }

  convertDatepickedToDate(datePicked: any): Date {
    return new Date(`${datePicked.year}-${datePicked.month}-${datePicked.day}`)
  }
  onSelectCarOption(car: any) {
    console.log('car: ', car);
    this.carSelected = car
  }

}
