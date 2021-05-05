export class Transfer{
    outboundTime: Date;
    arrivalTime: Date;
    fromStation: string;
    endStation: string;

    constructor(outboundTime: Date, arrivalTime: Date, fromStation: string, endStation: string){
        this.outboundTime = outboundTime;
        this.arrivalTime = arrivalTime;
        this.fromStation = fromStation;
        this.endStation = endStation;
    }
}
