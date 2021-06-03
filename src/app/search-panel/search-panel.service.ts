import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SearchModelDto } from '../model/search-dto.model';
import { Station } from '../model/station-model';
import { Transfer } from '../model/transfer.model';

@Injectable({
    providedIn: 'root',
   })
export class SearchPanelService{
    stations: Station[] = [
        new Station('Kraków Podgórze', 'Kraków', 'KRP'),
        new Station('Kraków Główny', 'Kraków', 'KRG'),
        new Station('Kraków Olsza', 'Kraków', 'KRO'),
        new Station('Warszawa Centralna', 'Warszawa', 'WAC'),
        new Station('Warszawa Główna', 'Warszawa', 'WAG'),
        new Station('Warszawa Stadion', 'Warszawa', 'WAS'),
        new Station('Gdańsk Główny', 'Gdańsk', 'GDS'),
        new Station('Gdynia', 'Gdańsk', 'GDN')
    ];

    constructor(private http: HttpClient){}

    searchTransfer(dto: SearchModelDto): Observable<Transfer[]> {
        return this.http.post<Transfer[]>(environment.apiUrl + 'transfer/search', dto);
    }

    searchStation(stationProposal: string): Observable<Station[]>{
        const response: Station[] = this.stations.filter(station => {
            const lowerCaseStationName: string = station.name.toLowerCase();
            return lowerCaseStationName.startsWith(stationProposal.toLowerCase());
        }
            );
        return new BehaviorSubject<Station[]>(response);
    }
}
