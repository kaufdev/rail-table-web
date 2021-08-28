import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {OrderDto} from "./order-dto.model";
import {HttpClient} from "@angular/common/http";
import {Ticket} from "../ticket/ticket.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class OrderDataService{
  constructor(private http: HttpClient){}

  orderTicket(dto: OrderDto) : Observable<Ticket>{
    return this.http.post<Ticket>(environment.apiUrl + 'order/ticket', dto);
  }
}
