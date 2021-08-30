
export class SearchModelDto{
    stationFrom: string;
    stationTo: string;
    outboundDate: string;


  constructor(stationFrom: string, stationTo: string, outboundDate: string) {
    this.stationFrom = stationFrom;
    this.stationTo = stationTo;
    this.outboundDate = outboundDate;
  }
}
