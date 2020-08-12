import {Component, OnInit} from '@angular/core';
import {Apollo, gql} from 'apollo-angular';
import {Notepad} from '../Notepad';
import {NotepadformComponent} from '../notepadform/notepadform.component';
import {NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  notes: any[];
  notepads: Array<Notepad> = [];

  constructor(private apollo: Apollo, private modalService: NgbModal) { }

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
    console.log('mutating....');
    this.apollo.mutate(
      {
        mutation: gql`
          mutation {
            addNotepad(name: "Third Notepad", color: "yellow", background: "#"){
              id
              name
              color
              background
            }
          }`
      }).subscribe(({ data }) => {
            console.log('got data', data);
        },
      (error) => {
            console.log('there was an error sending the query', error);
        });
  }

  open(){
    const modalRef = this.modalService.open(NotepadformComponent);
    modalRef.componentInstance.title = 'Create Notepad';
  }

}
