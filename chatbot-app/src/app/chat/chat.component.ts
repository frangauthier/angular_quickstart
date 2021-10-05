import { Component, OnInit } from '@angular/core';
import { JsonapiService } from '../services/jsonapi.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  textInput = '';

  constructor(
    private jsonAPIService: JsonapiService
  ) { }

  ngOnInit(): void {
    this.jsonAPIService.getTodo().subscribe(
      (data) => {
        console.log('data: ', data);
      }
    )
  }

  onClickButton() {
    console.log('textInput: ', this.textInput);
  }

}
