import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { NoteSearchComponent } from '../note-search/note-search.component';

import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { NOTES } from '../mock-notes';
import { NoteService } from '../note.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let noteService;
  let getNotesSpy;

  beforeEach(async(() => {
    noteService = jasmine.createSpyObj('NoteService', ['getNotes']);
    getNotesSpy = noteService.getNotes.and.returnValue( of(NOTES) );
    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        NoteSearchComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        { provide: NoteService, useValue: noteService }
      ]
    })
    .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display "My Notes" as headline', () => {
    expect(fixture.nativeElement.querySelector('h3').textContent).toEqual('My Notes');
  });

  it('should call noteService', async(() => {
    expect(getNotesSpy.calls.any()).toBe(true);
    }));

  // it('should display 4 links', async(() => {
  //   expect(fixture.nativeElement.querySelectorAll('a').length).toEqual(4);
  // }));

  describe('toggleNoteComplete', () => {
    it('should call noteService', async(() => {
      expect(getNotesSpy.calls.any()).toBe(true);
    }));
  });

});
