import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';

import { IFormCanDeactivate } from './iform-candeactivate';


@Injectable({providedIn: 'root'})
export class AlunosDeactivateGuard implements CanDeactivate<IFormCanDeactivate> {

  canDeactivate(
    component: IFormCanDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    console.log('guarda de desativação');

    //return component.podeMudarRota ? component.podeMudarRota() : true;

    return component.podeDesativar();

  }

}
