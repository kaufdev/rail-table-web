import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Ticket} from "./ticket.model";


@Component({
    selector: 'ticket',
    templateUrl: 'ticket.component.html',
})
export class TicketComponent {
  ticket: Ticket = new Ticket();


  constructor(@Inject(MAT_DIALOG_DATA) public data: Ticket) {
    this.ticket = data;
  }

  preparePostion(index: number) :string{
    const num = index + 1;
    return num + ')';
  }
}
