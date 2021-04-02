import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxPermissionsModule } from 'ngx-permissions';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxPermissionsModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
