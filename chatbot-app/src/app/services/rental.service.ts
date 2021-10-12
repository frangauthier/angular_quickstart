import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { iCar } from '../interfaces/iCar';
import { iRental } from '../interfaces/iRental';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  cars$: BehaviorSubject<iCar[]> = new BehaviorSubject([] as iCar[]);
  rentals$: BehaviorSubject<iRental[]> = new BehaviorSubject([] as iRental[]);

  constructor(
    private http: HttpClient
  ) {
    this.getCars().subscribe((cars) => {
      if (cars) {
        this.cars$.next(cars);
      }
    })
    this.getRentals().subscribe((rentals) => {
      if (rentals) {
        this.rentals$.next(rentals);
      }
    })
  }

  getCars(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.serverUrl}/cars/all`)
  }

  getRentals(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.serverUrl}/rentals/all`)
  }

  createRental(newRental: iRental): Observable<any[]> {
    return this.http.post<any[]>(`${environment.serverUrl}/rentals`, newRental)
  }

  createNewRental(newRental: iRental): Observable<boolean> {
    return this.createRental(newRental).pipe(
      map((result) => {
        // update rentals
        this.rentals$.pipe(take(1)).subscribe(allRentals => {
          allRentals.push(newRental);
          this.rentals$.next(allRentals);
        })
        // update cars
        this.cars$.pipe(take(1)).subscribe((allCars: iCar[]) => {
          allCars = allCars.map((car: iCar) => {
            if(car.carId === newRental.carId){
              car.inRental = true;
            }
            return car
          })
          this.cars$.next(allCars);
        })
        return true
      }, () => {
        return false
      })
    )
  }
}
