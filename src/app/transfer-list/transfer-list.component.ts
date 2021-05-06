import { Component, OnInit } from '@angular/core';
import { Transfer } from '../model/transfer.model';

@Component({
  selector: 'rtw-transfer-list',
  templateUrl: './transfer-list.component.html',
  styleUrls: ['./transfer-list.component.scss']
})
export class TransferListComponent{

  transfers: Transfer[] = [
    new Transfer(new Date(1995, 11, 17, 9, 15), new Date(1995, 11, 17), 'Warszawa Wschodnia', 'Kraków Płaszów', 'PKP Intercity', 100, 70),
    new Transfer(new Date(1995, 11, 17), new Date(1995, 11, 17), 'Radomsko', 'Toruń Główny', 'Deutch Bahn', 200, 40)
  ];

  constructor() { }

}
