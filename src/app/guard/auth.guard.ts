import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private route: Router) {
  }

  // tslint:disable-next-line:typedef
  canActivate() {
    // tslint:disable-next-line:prefer-const
    if (localStorage.getItem('token') === null) {
      this.route.navigate(['/']);
      return false;
    }
    return true;
  }
}
