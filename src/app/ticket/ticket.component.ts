import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Ticket} from "./ticket.model";
import {SharedService} from "../shared/shared.service";


@Component({
    selector: 'ticket',
    templateUrl: 'ticket.component.html',
})
export class TicketComponent {
  ticket: Ticket = new Ticket();


  constructor(@Inject(MAT_DIALOG_DATA) public data: Ticket,
              private sharedService: SharedService) {
    this.ticket = data;
  }

  preparePostion(index: number) :string{
    const num = index + 1;
    return num + ')';
  }

  onReturn(): void{
    this.sharedService.resetSearchScreen();
  }


}
