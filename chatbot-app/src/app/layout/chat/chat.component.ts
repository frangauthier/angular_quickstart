import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  todo1: any

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.todoService.getTodos(1).subscribe((result) => {
      console.log('result: ', result);
      this.todo1 = result;
    })
  }

  onClick() {
    console.log('On click');
    this.todoService.getTodos(2).subscribe((result) => {
      console.log('result: ', result);
      this.todo1 = result;
    })
  }
}
