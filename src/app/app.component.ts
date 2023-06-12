import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  greeting: any = {id: 'id', content: 'content'};
  title = 'CSRF Demo';


  constructor(private http: HttpClient) {
    this.get()
  }

  get() {
    this.http.get('/api/resource').subscribe(data => this.greeting = data);
  }

  post() {
    this.http.post('/api/resource', '').subscribe(data => this.greeting = data);
  }
}