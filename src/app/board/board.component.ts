import {Component, OnInit} from '@angular/core';
import {Apollo, gql} from 'apollo-angular';
import {Notepad} from '../Notepad';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  notes: any[];
  notepads: Array<Notepad> = [];

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: gql`
          {
            notepads {
              id
              name
              color
              background
            }
          }
        `,
      })
      .valueChanges.subscribe(({ data, loading }) => {
      // @ts-ignore
      for (const notepad of data.notepads){
        this.notepads.push(notepad);
      }
      console.log('loading ', loading);
    });
  }

  addNotepad(){

  }

}
