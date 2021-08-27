export class OrderDto{
  readonly sectionsIds: string[];
  readonly firstName:string;
  readonly lastName:string;
  readonly email:string;


  constructor(sectionsIds: string[], firstName: string, lastName: string, email: string) {
    this.sectionsIds = sectionsIds;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
}
