import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Page} from "../page";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  @Input() page?: Page<any>
  current: number = -1
  @Output() next: EventEmitter<number> = new EventEmitter<number>()

  get pageArray() : number[] {
    return this.page
      ? new Array<number>(this.page.totalPages)
        .fill(0)
        .map((value, index, array) => index + 1)
      : []
  }
}
