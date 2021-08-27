import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SearchModelDto } from '../model/search-dto.model';
import { Station } from '../model/station-model';
import { Transfer } from '../model/transfer.model';

@Injectable({
    providedIn: 'root',
   })
export class SearchPanelDataService {
    constructor(private http: HttpClient){}

    searchTransfer(dto: SearchModelDto): Observable<Transfer[]> {
        return this.http.post<Transfer[]>(environment.apiUrl + 'transfer/search', dto);
    }

    searchStation(stationProposal: string): Observable<Station[]>{
        let params: HttpParams = new HttpParams();
        params = params.append('stationNameProposal', stationProposal);
        return this.http.get<Station[]>(environment.apiUrl + 'station/search', {params});
    }
}
