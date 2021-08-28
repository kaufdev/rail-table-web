export class TicketTransferModel {
    readonly outboundStationName: string;
    readonly arrivalStationName: string;
    readonly outboundTime: Date;
    readonly arrivalTime: Date;
    readonly operator: string;
}
