export class TicketTransferModel {
    readonly outboundStationName: string;
    readonly arrivalStationName: string;
    readonly outboundTime: Date;
    readonly arrivalTime: Date;
    readonly operator: string;

  constructor(startStation: string, outboundTime: Date, endStation: string, arrivalTime: Date, operator: string) {
    this.outboundStationName = startStation;
    this.outboundTime = outboundTime;
    this.arrivalStationName = endStation;
    this.arrivalTime = arrivalTime;
    this.operator = operator;
  }
}
