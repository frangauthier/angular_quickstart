import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }

  isUserAdmin(password: string | null) {
    return password === environment.adminPassword;
  }
}
