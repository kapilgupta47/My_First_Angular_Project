import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //-----Inline Styling--------
  /**styles:
  [`
  h1{
    color:dodgerblue;
  }
  `]
  */
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  name = '';
  contact = '';
  place = '';
}
