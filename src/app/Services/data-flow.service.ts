import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DataFlowService {
  count = 0;
  data = new Observable<number>((observer: Observer<number>) => {
    observer.next(this.count);
  });
  /**
   * function to Permanently update the value to Count
   */
  update(num: number) {
    this.count = num;
  }
  isAuth()
  {
    // const promise = new Promise(
    //   (resolve,reject) => {
    //     setTimeout(()=>{
    //       resolve(true)
    //     },1000);
    //   }
    // )
    return true;
  }
  constructor() {}
}
