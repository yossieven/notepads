import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { NotepadComponent } from './notepad/notepad.component';
import { NoteComponent } from './note/note.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    NotepadComponent,
    NoteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
