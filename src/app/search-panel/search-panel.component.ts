import { Component } from '@angular/core';
import { SearchModelDto } from '../model/search-dto.model';
import { Transfer } from '../model/transfer.model';
import { SharedService } from '../shared/shared.service';
import { SearchPanelService } from './search-panel.service';
import * as moment from 'moment';
import { Station } from '../model/station-model';

@Component({
    selector: 'rtw-search-panel',
    templateUrl: 'search-panel.component.html',
    styleUrls: ['./search-panel.component.scss']
})
export class SearchPanelComponent{

    isStationFromDropdownVisible: boolean;
    stationFromName = '';
    fromStations: Station[] = [];
    searchModelDto: SearchModelDto = new SearchModelDto();

    constructor(private service: SearchPanelService, private sharedService: SharedService) { }

    formatOutboundDate(event: any): void{
        this.searchModelDto.outboundDate = moment(event).format('yyyy-MM-DD HH:mm:ss');
    }

    searchTransfer(): void{
        this.service.searchTransfer(this.searchModelDto)
            .subscribe(transfersFromServer => this.sharedService.pushTransfers(transfersFromServer));
    }

    setStationFromAcronym(station: Station): void {
        this.stationFromName = station.name;
        this.searchModelDto.stationFrom = station.acronym;
        this.isStationFromDropdownVisible = false;
    }

    searchFromStation(stationProposal: string): void {
        this.isStationFromDropdownVisible = stationProposal.length > 0;
        this.stationFromName = stationProposal;
        this.service.searchStation(stationProposal)
            .subscribe(stations => this.fromStations = stations);
    }
}
