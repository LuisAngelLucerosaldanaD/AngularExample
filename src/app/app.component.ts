import { Component } from '@angular/core';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  post = [];
  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe((data) => {
      this.post = data;
    });
  }
}
