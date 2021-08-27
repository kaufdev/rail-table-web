import {Injectable} from "@angular/core";
import {SearchModelDto} from "../model/search-dto.model";
import {Observable} from "rxjs";
import {Transfer} from "../model/transfer.model";
import {environment} from "../../environments/environment";
import {OrderDto} from "./order-dto.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class OrderDataService{
  constructor(private http: HttpClient){}

  orderTicket(dto: OrderDto) {
    return this.http.post<Transfer[]>(environment.apiUrl + 'order/ticket', dto);
  }
}
