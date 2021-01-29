import { Component } from '@angular/core';
import { ListService } from './list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  content!: string;
  constructor(public list: ListService) { }

  inputReady() {
    if (!this.content || this.content.trim() === '') return;
    this.list.addListItem(this.content);
    this.content = '';
  }

  finished() {
    this.list.removeDone();
  }

  unCheckAll() {
    this.list.unCheckAll();
  }
}
