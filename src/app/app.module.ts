import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RoomComponent } from './components/room/room.component';
import { RoomDetailsComponent } from './components/room-details/room-details.component';
import { RoomListComponent } from './components/room-list/room-list.component';
import { UpdateRoomComponent } from './components/update-room/update-room.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateRoomComponent } from './components/create-room/create-room.component';
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    RoomDetailsComponent,
    RoomListComponent,
    UpdateRoomComponent,
    CreateRoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
