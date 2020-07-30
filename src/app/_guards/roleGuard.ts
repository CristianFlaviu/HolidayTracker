import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot } from "@angular/router";

import {SnackbarService} from '../snackbar.service';
import { AuthService } from '../authentification/auth.service';


@Injectable({
    providedIn: 'root'
})

export class RoleGuard implements CanActivate
{
    constructor(private snackBarService: SnackbarService,
                private authService: AuthService,
                private router: Router)
    {   }
    canActivate(route: ActivatedRouteSnapshot): boolean{
        const expectedRole = route.data.expectedRole;

        console.log('expectedRole. '+ typeof( expectedRole), 'role: ' + typeof(this.authService.getLoggedInUser().userType))
        if (!expectedRole.includes(this.authService.getLoggedInUser().userType) )
        {
            this.snackBarService.error('ACCESS NOT ALLOWED');
            this.router.navigate(['/home']);

            return false;
        }
        return true;
    }
}