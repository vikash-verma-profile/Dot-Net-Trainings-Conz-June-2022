import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Sample } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-app';
  CustomerModels: Array<Sample> = new Array<Sample>();

  constructor(private http: HttpClient) {


  }
  ngOnInit(): void {
    this.GetCustomerData();
  }


  GetCustomerData() {
    this.http.get("https://webapplication220220719091319.azurewebsites.net/weatherforecast/sample").subscribe(res => this.GetFromServer(res), res => console.log(res));
  }
  GetFromServer(res: any) {
    console.log(res);
    this.CustomerModels = res;
  }
}
