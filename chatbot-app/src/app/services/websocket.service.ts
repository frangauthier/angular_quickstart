// import { Injectable } from "@angular/core";
// import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
// import { Observable, Observer, of, Subject } from "rxjs";
// import { delay, retryWhen, switchMap } from "rxjs/operators";
// import { environment } from "src/environments/environment";

// @Injectable()
// export class WebsocketService {
  
//   public connection$: WebSocketSubject<any> | undefined;

//   RETRY_SECONDS = 10; 
  
//   constructor() {}

//   connect(): Observable<any> {
//     return of(environment.wsEndpoint).pipe(
//       // https becomes wws, http becomes ws
//       switchMap(wsUrl => {
//         if (this.connection$) {
//           return this.connection$;
//         } else {
//           this.connection$ = webSocket(wsUrl);
//           console.log("New websocket")
//           this.connection$.subscribe((resHere) => {
//             console.log('resHere: ', resHere);
//           })
//           return this.connection$;
//         }
//       }),
//       retryWhen((errors) => errors.pipe(delay(this.RETRY_SECONDS)))
//     );
//   }

//   send(data: any) {
//     if (this.connection$) {
//       // security
//       // const payload = {
//       //   token: this.authService.token,
//       //   ...data,
//       // };
//       // this.connection$.next(payload);

//       this.connection$.next(data);
//     } else {
//       console.error('Did not send data, open a connection first');
//     }
//   }

//   closeConnection() {
//     if (this.connection$) {
//       this.connection$.complete();
//       this.connection$ = undefined;
//     }
//   }
//   ngOnDestroy() {
//     this.closeConnection();
//   }
// }

// import {Observable } from 'rxjs';
// import {webSocket, WebSocketSubject} from 'rxjs/webSocket';
// import { environment } from 'src/environments/environment';

// export class WebsocketService {

//   ws: WebSocket | undefined;
//   socketObs$: Observable<any> = webSocket(environment.wsEndpoint).asObservable()
//   socketIsOpen = 1;

//   createObservableSocket(url: string): Observable<any> {
//      this.ws = new WebSocket(url);

//     this.ws.onmessage = (event) => {
//       console.log('event: ', event);
//       // console.log('event received: ', JSON.parse(event));
//     }

//     return new Observable(
//        observer => {
//         if(!this.ws) return

//         // this.ws.onmessage = (event) =>
//         //   observer.next(event.data);

//         this.ws.onerror = (event) => observer.error(event);

//         this.ws.onclose = (event) => observer.complete();

//         return () => {
//           if(!this.ws) return
//           this.ws.close(1000, "The user disconnected");
//         }
//        }
//     );
//   }

//   sendMessage(message: string): string {
//     if(!this.ws) return 'Nope'
//     if (this.ws.readyState === this.socketIsOpen) {
//        this.ws.send(message);
//        return `Sent to server ${message}`;
//     } else {
//       return 'Message was not sent - the socket is closed';
//      }
//   }
// }

// import {Observable } from 'rxjs';
// import {webSocket, WebSocketSubject} from 'rxjs/webSocket';
import { environment } from 'src/environments/environment';

export class WebsocketService {

  ws: WebSocket | undefined;
  chatMessages: any[] = [];

  public openWebSocket(): void {
     this.ws = new WebSocket(environment.wsEndpoint);

     this.ws.onopen = (event) => {
       console.log('open: ', event);
     }

     this.ws.onerror = (event) => {
       console.log('error event: ', event);
     }
    this.ws.onmessage = (event) => {
      console.log('message event: ', event);
      // console.log('event received: ', JSON.parse(event));
      this.chatMessages.push(JSON.parse(event.data))
      console.log('chatMessages: ', this.chatMessages);
    }

    this.ws.onclose = (event) => {
      console.log('close event: ', event);
    }

  }

  sendMessage(message: string) {
    this.ws?.send(message)
  }
}


