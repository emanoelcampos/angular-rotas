import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';


@Injectable()
export class AlunosGuard implements CanActivateChild {

  constructor() { }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {

      console.log(childRoute);
      console.log(state);

      if (state.url.includes('editar')) {
        alert('TENTA NAO COMEDIA')
        return of(false);
      }
      return true;
  }
}
