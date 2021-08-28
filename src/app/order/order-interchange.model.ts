export class OrderInterchange {
  readonly startStation: String;
  readonly outboundTime: Date;
  readonly endStation: String;
  readonly arrivalTime: Date;
  readonly operator: string;

  constructor(startStation: String, outboundTime: Date, endStation: String, arrivalTime: Date, operator: string) {
    this.startStation = startStation;
    this.outboundTime = outboundTime;
    this.endStation = endStation;
    this.arrivalTime = arrivalTime;
    this.operator = operator;
  }
}
