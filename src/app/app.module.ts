import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxEverythingUppercaseModule } from 'ngx-everything-uppercase';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxEverythingUppercaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
