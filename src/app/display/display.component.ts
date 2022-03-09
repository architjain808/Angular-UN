import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { DataFlowService } from '../Services/data-flow.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent implements OnInit {
  public num: number = 0;
  constructor(private _dataFlow: DataFlowService) {}
  public plusSub:any;
  ngOnInit(): void {
     this.plusSub = this._dataFlow.data.subscribe((data) => {
     this.num = data;
      // this._dataFlow.update(this.num);
    }).unsubscribe;
  }
  /**
   * The function is suscribing the service Obserable
   * and Updating the count value
   */
  plus() {
    this.num++;
    this._dataFlow.update(this.num);
  }
  minus() {
    this.num--;
    this._dataFlow.update(this.num);
  }
  
}
