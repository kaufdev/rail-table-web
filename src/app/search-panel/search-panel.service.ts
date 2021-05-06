import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SearchModelDto } from '../model/search-dto.model';
import { Transfer } from '../model/transfer.model';

@Injectable({
    providedIn: 'root',
   })
export class SearchPanelService{
    private transfers: Transfer[] = [
        new Transfer(new Date(1995, 11, 17, 9, 15), new Date(1995, 11, 17), 'Warszawa Wschodnia',
                    'Kraków Płaszów', 'PKP Intercity', 100, 70),
        new Transfer(new Date(1995, 11, 17), new Date(1995, 11, 17), 'Radomsko', 'Toruń Główny', 'Deutch Bahn', 200, 40)
      ];

    searchTransfer(dto: SearchModelDto): Observable<Transfer[]> {
        return new BehaviorSubject<any>(this.transfers);
    }
}
