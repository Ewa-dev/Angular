import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private dataService: DataService) {}
  title = 'SDA-angular-forms';
  user: { firstName: String; password: String } = {
    firstName: '',
    password: '',
  };
  posts;
  getPosts() {
    this.dataService.getPosts().subscribe((posts) => {
      console.log(posts);
      this.posts = posts;
    });
  }
  ngOnInit() {
    this.getPosts();
  }
  onSubmit(): void {
    console.log(this.user);
  }
}