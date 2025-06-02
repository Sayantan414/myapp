import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './main/pages/auth/login/login.component';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(private auth: AuthService, private dialog: MatDialog, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.auth.isLoggedIn) {
            return true;
        } else {
            if (state.url !== '/home') {
                this.dialog.open(LoginComponent, {
                    width: '400px',
                    disableClose: true,
                });
                return false;
            }
            return true;
        }
    }
}
