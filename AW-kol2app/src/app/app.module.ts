import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AWDataService} from "./service/aw-data.service";
import { AWForumComponent } from './components/aw-forum/aw-forum.component';
import { AWForumItemsComponent } from './components/aw-forum-items/aw-forum-items.component';
import { AWForumDetailsComponent } from './components/aw-forum-details/aw-forum-details.component';


@NgModule({
  declarations: [
    AppComponent,
    AWForumComponent,
    AWForumItemsComponent,
    AWForumDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AWDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
