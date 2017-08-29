import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss']
})
export class DashboardHeaderComponent implements OnInit {

  results: any;

  // Inject HttpClient into your component or service.
  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {
    // Make the HTTP request:
    this.http.get('../../assets/i18n/en.json').subscribe(data => {
      // Read the result field from the JSON response.
      this.results = data;
      console.log(this.results);
    });

  }

}
