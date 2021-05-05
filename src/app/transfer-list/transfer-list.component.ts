import { Component, OnInit } from '@angular/core';
import { Transfer } from '../model/transfer.model';

@Component({
  selector: 'rtw-transfer-list',
  templateUrl: './transfer-list.component.html',
  styleUrls: ['./transfer-list.component.scss']
})
export class TransferListComponent{

  transfers: Transfer[] = [new Transfer(new Date(1995, 11, 17), new Date(1995, 11, 17), 'Dublin', 'Warszawa')];

  constructor() { }

}
