import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

interface StatusContainer {
  statusCode: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rail-table-web';
  constructor(private http: HttpClient){
    this.http.get(environment.apiUrl + 'title')
        .subscribe(
            (answer: StatusContainer) => this.title = this.title + ' + ' + answer.statusCode,
            (err) => console.error(err)
          );
  }
}


