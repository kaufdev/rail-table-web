import {Component} from "@angular/core";
import {OrderDataService} from "../order/order-data.service";
import {CheckTicketModel} from "./check-ticket.model";
import {AlertService} from "../alert/alert.service";
import {MatDialog} from "@angular/material/dialog";
import {TicketComponent} from "../ticket/ticket.component";

@Component({
  selector: 'rwt-check-ticket',
  templateUrl: 'check-ticket.component.html'
})
export class CheckTicketComponent{
  email:string
  identifier: string;


  constructor(private orderDataService: OrderDataService,
              private alertService: AlertService,
              public dialog: MatDialog) {
  }

  onCheck():void {
    this.orderDataService.checkTicket(new CheckTicketModel(this.identifier, this.email))
      .subscribe((ticket) => this.dialog.open(TicketComponent, {data: ticket}),
        (error) => this.alertService.showWarningAlert(error.error));
  }
}
