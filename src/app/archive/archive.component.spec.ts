import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ArchiveComponent } from './archive.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('NotesComponent', () => {
  let component: ArchiveComponent;
  let fixture: ComponentFixture<ArchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveComponent ],
      imports: [RouterTestingModule.withRoutes([]), HttpClientTestingModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});






// import {async, ComponentFixture, flush} from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { ArchiveComponent } from './archive.component';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import {Note} from '../note';
// import { NoteService } from '../note.service';
// //import { cold, getTestScheduler } from 'jasmine-marbles';
//
// describe('ArchiveComponent', () => {
//   let component: ArchiveComponent;
//   let fixture: ComponentFixture<ArchiveComponent>;
//   //let sut;
//   //let mockService;
//
//
//
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [ ArchiveComponent ],
//       imports: [RouterTestingModule.withRoutes([]), HttpClientTestingModule],
//     })
//     .compileComponents();
//
//     // mockService = {
//     //   addNote: jasmine.createSpy('addNote').and.returnValue(
//     //     cold('a', {
//     //       a: 'mockNote'
//     //     })
//     //   ),
//     //   getNotes: jasmine.createSpy('getNotes').and.returnValue(
//     //   cold('a', {
//     //     a: ['asd']
//     //   })
//     // )
//     // };
//
//     // sut = new ArchiveComponent(mockservice);
//   });
//
//   beforeEach(() => {
//     fixture = TestBed.createComponent(ArchiveComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
//
//   it('should be created', () => {
//     expect(component).toBeTruthy();
//   });
// });
//
//
//












































//
// import {async, ComponentFixture, flush, TestBed} from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { ArchiveComponent } from './archive.component';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import {Note} from '../note';
// import { NoteService } from '../note.service';
// import { cold, getTestScheduler } from 'jasmine-marbles';
//
// describe('ArchiveComponent', () => {
//   //let component: ArchiveComponent;
//   //let fixture: ComponentFixture<ArchiveComponent>;
//   let sut;
//   let mockService;
//
//
//
//   beforeEach(() => {
//     // TestBed.configureTestingModule({
//     //   declarations: [ ArchiveComponent ],
//     //   imports: [RouterTestingModule.withRoutes([]), HttpClientTestingModule],
//     // })
//     // .compileComponents();
//
//
//     mockService = {
//       addNote: jasmine.createSpy('addNote').and.returnValue(
//         cold('a', {
//           a: 'mockNote'
//         })
//       ),
//       getNotes: jasmine.createSpy('getNotes').and.returnValue(
//         cold('a', {
//           a: ['asd']
//         })
//       )
//     };
//
//     //mockService.note = [ 'asd', 'mockNote' ];
//
//     sut = new ArchiveComponent(mockService);
//     sut.onInit();
//     getTestScheduler().flush();
//     sut.onInit;
//   });
//
//   // beforeEach(() => {
//   //   fixture = TestBed.createComponent(ArchiveComponent);
//   //   component = fixture.componentInstance;
//   //   fixture.detectChanges();
//   // });
//   //
//   // it('should be created', () => {
//   //   expect(component).toBeTruthy();
//   // });
//
//   describe( 'add method', () => {
//     //let text = ' my todo ';
//     //let empty = '';
//
//     //sut.add(text);
//
//     // it('should be trim text', () => {
//     //   expect(sut.add(text)).toBeTruthy();
//     // });
//     //   add(text: string): void {
//     //     text = text.trim();
//     //   if (!text) { return; }
//     //   this.noteService.addNote({ text } as Note)
//     //     .subscribe(note => {
//     //       this.notes.push(note);
//     //     });
//     // }
//
//     it('should add note to array ', () => {
//       sut.add('text');
//       //mockService.addNote.subscribe();
//       //getTestScheduler().flush();
//       expect(sut.notes).toEqual(['asd', 'mockNote']);
//     });
//
//     it('should be called with "text"', () => {
//       sut.add('text');
//
//       expect(mockService.addNote).toHaveBeenCalledWith(Object({ text: 'text' }));
//     });
//
//     // it('should return empty string when !text', () => {
//     //   expect(sut.add(empty)).toEqual('');
//     // });
//   });
// });
