import {Component} from "@angular/core";
import {AlertService} from "./alert.service";
import {Alert} from "./alert.model";

@Component({
  selector: 'alert-list',
  templateUrl: 'alert-list.component.html',
  styleUrls: ['alert-list.component.scss']
})
export class AlertListComponent {
  alerts: Alert[] = [];

  constructor(private alertService: AlertService) {
    this.alertService.getAlerts()
      .subscribe((alerts) => this.alerts = alerts);
  }
}
