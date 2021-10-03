import {Component, ViewChild, ElementRef} from '@angular/core';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  list = ['Apples', 'Bananas', 'Strawberries', 'Blueberries', 'Kiwis'];
  @ViewChild('createInput') createInput: ElementRef<HTMLInputElement>;
  
  onCreateItem() {
    this.list.push(this.createInput.nativeElement.value);
    this.createInput.nativeElement.value = '';
  }
  
  onRemoveItem(index: number) {
    this.list.splice(index, 1);
  }
  
  onRemoveAllItems() {
    this.list.length = 0;
  }
}