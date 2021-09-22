import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

@Injectable()
export class AlwaysAuthGuard implements CanActivate {


    canActivate() {
      console.log("AlwaysAuthGuard");
    //   const password = prompt('Password please')
      return true;
    }

}