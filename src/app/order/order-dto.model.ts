export class OrderDto{
  readonly sectionsIds: string[];
  readonly firstName:string;
  readonly lastName:string;
  readonly email:string;
  readonly price: number;


  constructor(sectionsIds: string[], firstName: string, lastName: string, email: string, price: number) {
    this.sectionsIds = sectionsIds;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.price = price;
  }
}
