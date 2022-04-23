import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../types/book';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() bookList: Book[] = [];
  @Input() buttonText: string = '';

  constructor() {}

  ngOnInit(): void {
    console.log(this.bookList);
  }
}
