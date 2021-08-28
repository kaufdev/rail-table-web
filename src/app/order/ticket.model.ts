import {TicketTransferModel} from "./ticket-transfer.model";
import {TicketType} from "./order.model";

export class Ticket{
  readonly price: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly ticketType: TicketType;
  readonly transfers: TicketTransferModel[];
}
