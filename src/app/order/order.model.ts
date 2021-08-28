import {OrderInterchange} from "./order-interchange.model";

export class Order {
  sectionsIds: string[];
  totalStartStation: string;
  totalEndStation: string
  totalOutboundTime: Date
  totalArrivalTime: Date
  operator: string;
  cost:number;
  classType: string;
  interchanges: OrderInterchange[] = [];


  firstName:string = null;
  lastName:string = null;
  email:string = null;



  constructor(sectionsIds: string[], startStation: string, endStation: string, outboundTime: Date, arrivalTime: Date, operator: string,cost: number, classType: string, interchanges: OrderInterchange[]) {
    this.sectionsIds = sectionsIds;
    this.totalStartStation = startStation;
    this.totalEndStation = endStation;
    this.totalOutboundTime = outboundTime;
    this.totalArrivalTime = arrivalTime;
    this.operator = operator;
    this.cost = cost;
    this.classType = classType;
    this.interchanges = interchanges;
  }


}
