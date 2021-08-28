import {Component, Input} from "@angular/core";

@Component({
  selector: 'order-section-row',
  templateUrl: './order-section-row.component.html'
})
export class OrderSectionRow{
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
