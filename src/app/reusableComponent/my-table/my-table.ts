import { JsonPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-table',
  imports: [JsonPipe],
  templateUrl: './my-table.html',
  styleUrl: './my-table.css'
})
export class MyTable {
  @Input() headerList: GridColumn[] = [];
  @Input() gridData: any[] = [];
  @Input() isActionButtonRequired: boolean = false;

  @Output() onEditClicked = new EventEmitter<any>();
  @Output() onDeletAction = new EventEmitter<any>();


  onEditCell(itemData: any) {
    debugger;
    this.onEditClicked.emit(itemData)
  }
  onDeleteClicked(itemData: any) {
    debugger;
    this.onDeletAction.emit(itemData)
  }
}


export interface GridColumn {
  headerText: string;
  fieldName: string;
}