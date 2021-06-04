import { Component, Input } from '@angular/core';

@Component({
    selector: 'rtw-interchange-transfer',
    templateUrl: './interchange-transfer.component.html',
    styleUrls: ['./interchange-transfer.component.scss']
  })
export class InterchangeTransferComponent{
    @Input() startStation: string;
    @Input() endStation: string;
    @Input() outboundTime: Date;
    @Input() arrivalTime: Date;
    @Input() operator: string;
}
