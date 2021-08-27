export class Order {
  sectionsIds: string[];
  startStation: string;
  endStation: string
  outboundTime: Date
  arrivalTime: Date
  operator: string;
  cost:number;
  firstName:string = null;
  lastName:string = null;
  email:string = null;
  classType: string;


  constructor(sectionsIds: string[], startStation: string, endStation: string, outboundTime: Date, arrivalTime: Date, operator: string,cost: number, classType: string) {
    this.sectionsIds = sectionsIds;
    this.startStation = startStation;
    this.endStation = endStation;
    this.outboundTime = outboundTime;
    this.arrivalTime = arrivalTime;
    this.operator = operator;
    this.cost = cost;
    this.classType = classType;
  }
}
