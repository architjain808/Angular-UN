import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataFlowService } from './data-flow.service';

@Injectable({
  providedIn: 'root'
})
export class RouterAuthService implements CanActivate{
  constructor(private _display:DataFlowService , private _route:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
       return this._display.isAuth()
      //  .then(
      //    (auth:boolean) => {
      //    if(auth)
      //    return true
      //    else
      //    this._route.navigate(['/']);
      //  });
  }
  
}
