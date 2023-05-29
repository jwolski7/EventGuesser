import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EditEventComponent } from './components/edit-event/edit-event.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { EditPageComponent } from './components/edit-page/edit-page.component';
import { FrontPageComponent } from './components/front-page/front-page.component';
import { GamePageComponent } from './components/game-page/game-page.component';

@NgModule({
  declarations: [
    AppComponent,
    EditEventComponent,
    EditPageComponent,
    FrontPageComponent,
    GamePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
