import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Menage Control Panel';
  public mailingListService = environment.mailingListService;

  ngOnInit(): void {
    console.log(this.mailingListService);
  }

}
