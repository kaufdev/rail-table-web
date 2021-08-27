import {Component, Input} from '@angular/core';
import {Transfer} from '../model/transfer.model';
import {MatDialog} from "@angular/material/dialog";
import {OrderTicketComponent} from "../order/order-ticket.component";
import {Order} from "../order/order.model";

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

  currentCost: string;

  constructor(public dialog: MatDialog) {}

  orderNormalTicket() {
    const order = new Order(null,this.startStation,this.endStation,this.outboundTime, this.arrivalTime,this.operator,this.secondClassPrice,"Second class");
    this.dialog.open(OrderTicketComponent,{data: order});
  }

  orderFirstClassTicket() {
    const order = new Order(null,this.startStation,this.endStation,this.outboundTime, this.arrivalTime,this.operator,this.secondClassPrice, "First Class");
    this.dialog.open(OrderTicketComponent,{data: order});
  }
}

