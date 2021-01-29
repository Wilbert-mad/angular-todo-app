import { Injectable } from '@angular/core';

interface Item {
  done: boolean;
  content: string;
}

@Injectable()
export class ListService {
  items: Item[] = [
    {
      done: true,
      content: 'Make a todo app'
    },
    {
      done: false,
      content: 'Do something outside of the world'
    }
  ];

  addListItem(content: string) {
    this.items.push({
      done: false,
      content,
    });
  }

  removeDone() {
    const oldItems = this.items;
    const newItems = [];
    for (const item of oldItems) {
      if (!item.done) newItems.push(item); 
    }
    this.items = newItems;
  }

  unCheckAll() {
    const oldItems = this.items;
    const newItems: Item[] = [];
    for (const item of oldItems) {
      if (item.done) item.done = !item.done
      newItems.push(item); 
    }
    this.items = newItems;
  }
}