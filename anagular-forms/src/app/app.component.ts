import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'SDA-angular-forms';
  user: { firstName: String; password: String } = {
    firstName: '',
    password: '',
  };
  onSubmit(): void {
    console.log(this.user);
  }
}