import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Security } from '../utils/security.utils';

@Injectable()
export class AuthService implements CanActivate {
    constructor(private router: Router) {
    }

    canActivate() {
        const token = Security.getToken();
        if (!token) {
            this.router.navigate(['/login']);
            return false;
        }

        return true;
    }
}