import {Component, Inject, Input} from "@angular/core";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Order} from "./order.model";

@Component({
    selector: 'order-ticket',
    templateUrl: 'order-ticket.component.html',
})
export class OrderTicketComponent {
  order: Order;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Order) {
    console.log(data)
    this.order = data;
  }

  public ordered(): void{
    console.log(this.order);
  }
}
