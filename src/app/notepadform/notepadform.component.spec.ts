import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotepadformComponent } from './notepadform.component';

describe('NotepadformComponent', () => {
  let component: NotepadformComponent;
  let fixture: ComponentFixture<NotepadformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotepadformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotepadformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
