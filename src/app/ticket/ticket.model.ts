import {TicketTransferModel} from "./ticket-transfer.model";
import {TicketType} from "../order/order.model";

export class Ticket{
  readonly price: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly ticketType: TicketType;
  readonly identifier: string;
  readonly transfers: TicketTransferModel[];
}
