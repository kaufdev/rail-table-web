import {Component} from '@angular/core';
import {SearchModelDto} from '../model/search-dto.model';
import {SharedService} from '../shared/shared.service';
import {SearchPanelDataService} from './search-panel-data.service';
import * as moment from 'moment';
import {Station} from '../model/station-model';

@Component({
  selector: 'rtw-search-panel',
  templateUrl: 'search-panel.component.html',
  styleUrls: ['./search-panel.component.scss']
})
export class SearchPanelComponent {
  fromStations: Station[] = [];
  stationFrom: string = '';
  stationTo: string = '';
  outboundDate: string = '';

  constructor(private service: SearchPanelDataService,
              private sharedService: SharedService) {
    this.sharedService.checkResetSearchScreen().subscribe((check) => {
      if (check) {
        this.stationFrom = '';
        this.stationTo = '';
        this.outboundDate = '';
      }
    })
  }

  formatOutboundDate(event: any): void {
    this.outboundDate = moment(event).format('yyyy-MM-DD HH:mm:ss');
  }

  searchTransfer(): void {
    this.service.searchTransfer(new SearchModelDto(this.stationFrom, this.stationTo, this.outboundDate))
      .subscribe(transfersFromServer => this.sharedService.pushTransfers(transfersFromServer));
  }
}
