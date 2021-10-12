import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  @Input() cars: any[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
