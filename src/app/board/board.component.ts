import {Component, OnInit} from '@angular/core';
import {Apollo, gql} from 'apollo-angular';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  notes: any[];

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
      this.apollo
      .watchQuery({
        query: gql`
          {
            notes {
              title
              text
            }
          }
        `,
      })
      .valueChanges.subscribe(({ data, loading }) => {
      console.log('data ', data);
      console.log('loading ', loading);
    });
  }


}
