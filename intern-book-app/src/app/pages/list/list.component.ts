import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/types/book';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  title = '読んだ本';

  book: Book = {
    name: 'name',
    detail: 'detail',
    evaluation: 10,
  };

  addBook() {
    this.bookList.push({
      name: this.book.name,
      detail: this.book.detail,
      evaluation: this.book.evaluation,
    });
  }

  bookList: Book[] = [
    {
      name: 'アンドロイドは電気羊の夢を見るか?',
      detail:
        '第三次大戦後の未来、サンフランシスコを舞台に賞金稼ぎのリック・デッカードが、火星から逃亡してきた8体のアンドロイドを「処理」するというあらすじ',
      evaluation: 90,
    },
    {
      name: '岩田さん:岩田聡はこんなことを話していた。',
      detail: '任天堂の元社長、岩田聡さんのことばをまとめた本',
      evaluation: 90,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
