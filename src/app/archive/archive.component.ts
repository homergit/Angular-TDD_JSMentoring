import { Component, OnInit } from '@angular/core';

import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  notes: Note[];

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.getNotes();
  }

  getNotes(): void {
    this.noteService.getNotes()
    .subscribe(notes => this.notes = notes);
  }

  add(text: string): void {
    text = text.trim();
    if (!text) { return; }
    this.noteService.addNote({ text } as Note)
      .subscribe(note => {
        this.notes.push(note);
      });
  }

  delete(note: Note): void {
    this.notes = this.notes.filter(h => h !== note);
    this.noteService.deleteNote(note).subscribe();
  }

  rearchiveItem(note: Note): void {
    note.isArchived = !note.isArchived;

    this.noteService.updateNote(note).subscribe();
    this.getNotes();
  }

}
