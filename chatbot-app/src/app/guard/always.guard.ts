import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { AdminService } from "../services/admin.service";

@Injectable()
export class AlwaysAuthGuard implements CanActivate {

    constructor(private adminService: AdminService) { }

    canActivate() {
        console.log("AlwaysAuthGuard");
        const password = prompt('Password please');
        return this.adminService.isUserAdmin(password);
    }

}