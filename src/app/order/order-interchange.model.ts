export class OrderInterchange {
  readonly startStation: String;
  readonly outboundTime: Date;
  readonly endStation: String;
  readonly arrivalTime: Date;

  constructor(startStation: String, outboundTime: Date, endStation: String, arrivalTime: Date) {
    this.startStation = startStation;
    this.outboundTime = outboundTime;
    this.endStation = endStation;
    this.arrivalTime = arrivalTime;
  }
}
