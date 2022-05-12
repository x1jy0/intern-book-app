import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../types/book';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() bookList: Book[] = [];
  @Input() buttonText: string = '';
  @Output() removeClick = new EventEmitter<number>(); //削除用

  constructor() {}

  ngOnInit(): void {}

  remove(i: number) {
    //removeClickを発火させる
    this.removeClick.emit(i);
  }
}
