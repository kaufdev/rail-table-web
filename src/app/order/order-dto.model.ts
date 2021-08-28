import {TicketType} from "./order.model";

export class OrderDto{
  readonly sectionsIds: string[];
  readonly firstName:string;
  readonly lastName:string;
  readonly email:string;
  readonly price: number;
  readonly ticketType: TicketType;


  constructor(sectionsIds: string[], firstName: string, lastName: string, email: string, price: number, ticketType: TicketType) {
    this.sectionsIds = sectionsIds;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.price = price;
    this.ticketType = ticketType
  }
}
