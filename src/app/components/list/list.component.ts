import {Component, ViewChild, ElementRef} from '@angular/core';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  list = ['Apples', 'Bananas', 'Strawberries', 'Blueberries', 'Kiwis'];
  @ViewChild('createInput') createInput: ElementRef<HTMLInputElement>;
  
  onCreateItem(item: string) {
    this.list.push(item);
  }
  
  onRemoveItem(index: number) {
    this.list.splice(index, 1);
  }
  
  onRemoveAllItems() {
    this.list.length = 0;
    this.createInput.nativeElement.value = '';
  }
}