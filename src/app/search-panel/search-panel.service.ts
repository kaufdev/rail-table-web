import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SearchModelDto } from '../model/search-dto.model';
import { Transfer } from '../model/transfer.model';

@Injectable({
    providedIn: 'root',
   })
export class SearchPanelService{
    searchTransfer(dto: SearchModelDto): Observable<Transfer[]> {
        return new BehaviorSubject<any>([new Transfer(new Date(1995, 11, 17), new Date(1995, 11, 17), 'Dublin', 'Warszawa')]);
    }
}
