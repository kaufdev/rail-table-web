import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SearchModelDto } from '../model/search-dto.model';
import { Transfer } from '../model/transfer.model';

@Injectable({
    providedIn: 'root',
   })
export class SearchPanelService{


    constructor(private http: HttpClient){}

    searchTransfer(dto: SearchModelDto): Observable<Transfer[]> {
        return this.http.post<Transfer[]>(environment.apiUrl + 'transfer/search', dto);
    }
}
