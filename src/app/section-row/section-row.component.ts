import {Component, Input} from "@angular/core";


@Component({
  selector: 'section-row',
  templateUrl: './section-row.component.html'
})
export class SectionRow {
  @Input()
  operator: string;

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
