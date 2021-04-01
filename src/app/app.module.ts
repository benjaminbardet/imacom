import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PosteMiniComponent } from './poste-mini/poste-mini.component';

@NgModule({
  declarations: [
    AppComponent,
    PosteMiniComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
