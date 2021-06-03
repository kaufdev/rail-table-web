import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Station } from '../model/station-model';
import { SearchPanelService } from '../search-panel/search-panel.service';
import { SharedService } from '../shared/shared.service';

@Component({
    selector: 'rtw-station-form-input',
    templateUrl: 'station-form-input.component.html',
    styleUrls: ['./station-form-input.component.scss'],
    providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: StationFormComponent,
          multi: true,
        },
      ],
})
export class StationFormComponent implements ControlValueAccessor{
    @Input() inputName: string;

    stationAcronym = '';
    stationName = '';
    isStationDropdownVisible: boolean;
    stations: Station[] = [];
    disabled = false;
    onChange = (stationAcronym: string) => {};
    onTouch = () => {};

    constructor(private service: SearchPanelService){
    }

    writeValue(value: string): void {
        this.onChange(value);
        this.stationAcronym = value;
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouch = fn;
    }

    setDisabledState?(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    setStationFromAcronym(station: Station): void {
        this.stationName = station.name;
        this.stationAcronym = station.acronym;
        this.writeValue(this.stationAcronym);
        this.onTouch();
        this.isStationDropdownVisible = false;
    }

    searchFromStation(stationProposal: string): void {
        this.isStationDropdownVisible = stationProposal.length > 0;
        this.stationName = stationProposal;
        this.service.searchStation(stationProposal)
            .subscribe(stations => this.stations = stations);
    }
}
