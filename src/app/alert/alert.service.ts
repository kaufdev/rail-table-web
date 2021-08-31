import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {Alert} from "./alert.model";

@Injectable({
  providedIn: 'root',
})
export class AlertService{
  private static id: number = 0;
  private alertsStream = new BehaviorSubject<Alert[]>([]);

  public showWarningAlert(statement: string){
    AlertService.id = AlertService.id + 1;
    const newAlert = new Alert(AlertService.id,statement);
    this.alertsStream.value.push(newAlert);
    this.alertsStream.next(this.alertsStream.value);
  }

  public getAlerts(): Observable<Alert[]>{
    return this.alertsStream.asObservable();
  }

  public closeAlert(id: number) {
    const alertWithoutAlertWithId = this.alertsStream.getValue().filter((alert)=> alert.id != id);
    this.alertsStream.next(alertWithoutAlertWithId);
  }
}
