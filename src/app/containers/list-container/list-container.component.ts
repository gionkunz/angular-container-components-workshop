import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html'
})
export class ListContainerComponent {
  list: string[] = ['Apples', 'Bananas', 'Strawberries', 'Blueberries', 'Kiwis'];
  
  createListItem(item: string) {
    this.list.push(item);
  }
  
  removeListItem(index: number) {
    this.list.splice(index, 1);
  }
  
  removeAllItems() {
    this.list.length = 0;
  }
}