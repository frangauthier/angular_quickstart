import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  // https://javascript-conference.com/blog/real-time-in-angular-a-journey-into-websocket-and-rxjs/

  // private socket$: WebSocketSubject<any>;
  // private messagesSubject$ = new Subject();

  constructor() { }
}
