import {Component, Inject, Input} from "@angular/core";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Order} from "./order.model";
import {OrderDataService} from "./order-data.service";
import {OrderDto} from "./order-dto.model";

@Component({
    selector: 'order-ticket',
    templateUrl: 'order-ticket.component.html',
})
export class OrderTicketComponent {
  order: Order;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Order, private orderDataService: OrderDataService) {
    this.order = data;
  }

  public ordered(): void{
    this.orderDataService.orderTicket(new OrderDto(this.order.sectionsIds,this.order.firstName,this.order.lastName,this.order.email))
      .subscribe(() => console.log("Success"));
  }
}
