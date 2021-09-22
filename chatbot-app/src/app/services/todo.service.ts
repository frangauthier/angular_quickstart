import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getTodos(todoId?: number): Observable<any> {
    return this.http.get(`${environment.todoAPIUrl}/${todoId || 1}`);
  }
}
