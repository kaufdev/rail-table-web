import { Component, Input, OnInit } from '@angular/core';
import { Transfer } from '../model/transfer.model';

@Component({
  selector: 'rtw-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent{

  @Input()
  startStation: string;

  @Input()
  endStation: string;

  @Input()
  outboundTime: Date;

  @Input()
  arrivalTime: Date;

  @Input()
  operator: string;

  @Input()
  firstClassPrice: number;

  @Input()
  secondClassPrice: number;

  @Input()
  interchangeTransfers: Transfer[];

  isInterchangeVisible: boolean = false;
}
