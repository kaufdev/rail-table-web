import { Station } from './station-model';

export class Transfer{
    outboundTime: Date;
    arrivalTime: Date;
    fromStation: Station;
    endStation: Station;
    operator: string;
    firstClassPrice: number;
    secondClassPrice: number;
}
