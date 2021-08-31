import { InterchangeTransfer } from './interchange-transfer.model';
import { Station } from './station-model';

export class Transfer{
    outboundTime: Date;
    arrivalTime: Date;
    startStation: Station;
    endStation: Station;
    operator: string;
    firstClassPrice: number;
    secondClassPrice: number;
    interchangeTransfers: InterchangeTransfer[] = [];
    sectionsIds: string[] = [];
    allSeatsForSecondClass: string;
    availableSeatsForSecondClass: string;
    allSeatsForFirstClass: string;
    availableSeatsForFirstClass: string;
}
