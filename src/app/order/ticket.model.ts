import {TicketTransferModel} from "./ticket-transfer.model";

export class Ticket{
  readonly price: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly transfers: TicketTransferModel[];
}
