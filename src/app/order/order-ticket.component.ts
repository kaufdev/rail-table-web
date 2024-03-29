import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {Order} from "./order.model";
import {OrderDataService} from "./order-data.service";
import {OrderDto} from "./order-dto.model";
import {TicketComponent} from "../ticket/ticket.component";
import {Ticket} from "../ticket/ticket.model";
import {AlertService} from "../alert/alert.service";

@Component({
  selector: 'order-ticket',
  templateUrl: 'order-ticket.component.html',
})
export class OrderTicketComponent {
  order: Order;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Order,
              private orderDataService: OrderDataService,
              private alertService: AlertService,
              public dialog: MatDialog) {
    this.order = data;
  }

  public ordered(): void {
    this.orderDataService.orderTicket(new OrderDto(this.order.sectionsIds, this.order.firstName, this.order.lastName, this.order.email, this.order.cost, this.order.ticketType))
      .subscribe((ticket: Ticket) => this.dialog.open(TicketComponent, {data: ticket}),
        (error) => this.alertService.showWarningAlert(error.error));
  }

  preparePostion(index: number): string {
    const num = index + 1;
    return num + ')';
  }
}
