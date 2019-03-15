import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  elementType = 'url';
  value = 'https://www.google.com.br/';
  title = 'projeto-agenda';
}
