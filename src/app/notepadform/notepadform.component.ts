import {Component, Input, OnInit} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-notepadform',
  templateUrl: './notepadform.component.html',
  styleUrls: ['./notepadform.component.css']
})
export class NotepadformComponent implements OnInit {

  @Input() title = 'Information';

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
  }

}
