import { Component } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'jest-tests';
  counter = 0;

  constructor(private permissionService: NgxPermissionsService) {}

  public onButtonClicked() {
    if (this.permissionService.hasPermission('whatever')) {
      this.counter++;
    }
  }
}
