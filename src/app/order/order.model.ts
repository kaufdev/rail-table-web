import {OrderInterchange} from "./order-interchange.model";

export enum TicketType{
  SECOND_CLASS = 'Second Class',
  FIRST_CLASS = 'First Class'
}

export class Order {
  sectionsIds: string[];
  totalStartStation: string;
  totalEndStation: string
  totalOutboundTime: Date
  totalArrivalTime: Date
  operator: string;
  cost:number;
  ticketType: TicketType;
  interchanges: OrderInterchange[] = [];


  firstName:string = null;
  lastName:string = null;
  email:string = null;



  constructor(sectionsIds: string[],
              startStation: string,
              endStation: string,
              outboundTime: Date,
              arrivalTime: Date,
              operator: string,
              cost: number,
              classType: TicketType,
              interchanges: OrderInterchange[]) {
    this.sectionsIds = sectionsIds;
    this.totalStartStation = startStation;
    this.totalEndStation = endStation;
    this.totalOutboundTime = outboundTime;
    this.totalArrivalTime = arrivalTime;
    this.operator = operator;
    this.cost = cost;
    this.ticketType = classType;
    this.interchanges = interchanges;
  }


}
