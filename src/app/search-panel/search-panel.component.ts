import { Component } from '@angular/core';
import { SearchModelDto } from '../model/search-dto.model';
import { Transfer } from '../model/transfer.model';
import { SearchPanelService } from './search-panel.service';

@Component({
    selector: 'rtw-search-panel',
    templateUrl: 'search-panel.component.html',
    styleUrls: ['./search-panel.component.scss']
})
export class SearchPanelComponent{
    searchModelDto: SearchModelDto = new SearchModelDto();
    transfers: Transfer[] = [];

    constructor(private service: SearchPanelService) { }

    searchTransfer(): void{
        this.service.searchTransfer(this.searchModelDto)
            .subscribe(transfersFromServer => this.transfers = transfersFromServer);
    }
}
