import {Component, Input} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {OrderTicketComponent} from "../order/order-ticket.component";
import {Order} from "../order/order.model";
import {InterchangeTransfer} from "../model/interchange-transfer.model";
import {OrderInterchange} from "../order/order-interchange.model";

@Component({
  selector: 'rtw-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent{

  @Input()
  allSeats: string;

  @Input()
  takenSeats: string;

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
  interchangeTransfers: InterchangeTransfer[];

  @Input()
  sectionsIds: string[];

  isInterchangeVisible: boolean = false;

  currentCost: string;

  constructor(public dialog: MatDialog) {}

  orderNormalTicket() {
    const orderInterchanges = this.interchangeTransfers.map(interchange =>
      new OrderInterchange(interchange.startStation,
        interchange.outboundTime,
        interchange.endStation,
        interchange.arrivalTime,
        interchange.operator));
    const order = new Order(this.sectionsIds,this.startStation,this.endStation,this.outboundTime, this.arrivalTime,this.operator,this.secondClassPrice,"Second class",orderInterchanges);
    this.dialog.open(OrderTicketComponent,{data: order});
  }

  orderFirstClassTicket() {
    const orderInterchanges = this.interchangeTransfers.map(interchange =>
      new OrderInterchange(interchange.startStation,
        interchange.outboundTime,
        interchange.endStation,
        interchange.arrivalTime,
        interchange.operator));    const order = new Order(this.sectionsIds,this.startStation,this.endStation,this.outboundTime, this.arrivalTime,this.operator,this.secondClassPrice, "First Class",orderInterchanges);
    this.dialog.open(OrderTicketComponent,{data: order});
  }
}

