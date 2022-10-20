import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AlunosGuard implements CanActivateChild {

  constructor() { }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise <boolean> | boolean {

      console.log('guarda de rota filha');
      return true;
  }
}
