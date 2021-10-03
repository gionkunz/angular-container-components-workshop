import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {
  @Input() item: any;
  @Output() remove = new EventEmitter<any>();
  
  onRemove() {
    this.remove.emit();
  }
}