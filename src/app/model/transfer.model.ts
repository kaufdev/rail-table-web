export class Transfer{
    outboundTime: Date;
    arrivalTime: Date;
    fromStation: string;
    endStation: string;
    operator: string;
    firstClassPrice: number;
    secondClassPrice: number;

    constructor(outboundTime: Date, arrivalTime: Date, fromStation: string, endStation: string,
                operator: string, firstClassPrice: number, secondClassPrice: number){
        this.outboundTime = outboundTime;
        this.arrivalTime = arrivalTime;
        this.fromStation = fromStation;
        this.endStation = endStation;
        this.operator = operator;
        this.firstClassPrice = firstClassPrice;
        this.secondClassPrice = secondClassPrice;
    }
}
