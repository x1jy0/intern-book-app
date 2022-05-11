import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/types/book';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  title = '読んだ本';

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

  //ngModelを使う時の初期値
  // book: Book = {
  //   name: '',
  //   detail: '',
  //   evaluation: 0,
  // };

  bookForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    detail: new FormControl(''),
    evaluation: new FormControl(0),
  });

  constructor() {}

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm() {
    // ngModelを使う時のリセット用の代入
    // this.book = {
    //   name: '',
    //   detail: '',
    //   evaluation: 0,
    // };

    //各パラメータに初期値を代入
    this.bookForm.reset({
      name: '書籍名の初期値',
      detail: 'あらすじの初期値',
      evaluation: 0,
    });
  }

  addBook() {
    //ngModelを使う時の追加処理
    // this.bookList.push({
    //   name: this.book.name,
    //   detail: this.book.detail,
    //   evaluation: this.book.evaluation,
    // });

    this.bookList.push(this.bookForm.value);
    this.resetForm();
  }
}
