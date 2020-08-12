import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { NotepadComponent } from './notepad/notepad.component';
import { NoteComponent } from './note/note.component';
import { PalletComponent } from './pallet/pallet.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { NotepadformComponent } from './notepadform/notepadform.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    NotepadComponent,
    NoteComponent,
    PalletComponent,
    NotepadformComponent
  ],
  imports: [
    BrowserModule,
    GraphQLModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
