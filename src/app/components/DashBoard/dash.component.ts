import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Post } from 'src/app/Post';
@Component({
  selector: 'DashBoard',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css'],
})
export class DashBoard {
  posts: Post[];

  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe((data) => {
      this.posts = data;
    });
  }
}
