import { Component } from '@angular/core';
import { SearchModelDto } from '../model/search-dto.model';
import { Transfer } from '../model/transfer.model';
import { SharedService } from '../shared/shared.service';
import { SearchPanelService } from './search-panel.service';

@Component({
    selector: 'rtw-search-panel',
    templateUrl: 'search-panel.component.html',
    styleUrls: ['./search-panel.component.scss']
})
export class SearchPanelComponent{
    searchModelDto: SearchModelDto = new SearchModelDto();

    constructor(private service: SearchPanelService, private sharedService: SharedService) { }

    searchTransfer(): void{
        this.service.searchTransfer(this.searchModelDto)
            .subscribe(transfersFromServer => this.sharedService.pushTransfers(transfersFromServer));
    }
}
