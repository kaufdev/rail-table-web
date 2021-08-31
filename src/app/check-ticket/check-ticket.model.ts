export class CheckTicketModel{
  readonly identifier;
  readonly email;

  constructor(identifier, email) {
    this.identifier = identifier;
    this.email = email;
  }
}
