import {Component, Input} from "@angular/core";
import {AlertService} from "./alert.service";

@Component({
  selector: 'rwt-alert',
  templateUrl: 'alert.component.html'
}) export class AlertComponent{

  @Input()
  statement: string;

  @Input()
  id: number;

  constructor(private alertService: AlertService) {}

  close(): void {
    this.alertService.closeAlert(this.id);
  }
}
