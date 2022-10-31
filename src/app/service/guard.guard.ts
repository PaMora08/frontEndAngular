import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor(private tokenServ: TokenService, private rutas: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.tokenServ.getToken() != null) {
      return true;
      console.log("pasó por true de guard")
    }
    else {
      this.rutas.navigate(['iniciar-sesion']);
      console.log("No pasó por true de guard")

      return false;
    }

  }

}
