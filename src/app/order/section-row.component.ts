import {Component, Inject, Input} from "@angular/core";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Order} from "./order.model";
import {Ticket} from "./ticket.model";

@Component({
  selector: 'section-row',
  templateUrl: './section-row.component.html'
})
export class SectionRow {


  @Input()
  position: string;

  @Input()
  outboundStation: string;

  @Input()
  outboundTime: Date;

  @Input()
  arrivalStation: string;

  @Input()
  arrivalTime: Date;
}
