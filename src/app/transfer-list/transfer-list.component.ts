import { Component } from '@angular/core';
import { Transfer } from '../model/transfer.model';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'rtw-transfer-list',
  templateUrl: './transfer-list.component.html',
  styleUrls: ['./transfer-list.component.scss']
})
export class TransferListComponent{

  transfers: Transfer[] = [];

  constructor(private sharedService: SharedService) {
    this.sharedService.checkResetSearchScreen().subscribe((check) => {
      if(check) this.transfers = []
    })
    this.sharedService.getTransferStream().subscribe(transfers => this.transfers = transfers);
  }
}
