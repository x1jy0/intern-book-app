import { Component, OnInit } from '@angular/core';
import { Book } from '../../types/book'
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  bookList: Book[] = [
    {
      name: 'アンドロイドは電気羊の夢を見るか?',
      detail: '第三次大戦後の未来、サンフランシスコを舞台に賞金稼ぎのリック・デッカードが、火星から逃亡してきた8体のアンドロイドを「処理」するというあらすじ',
      evaluation: 90
    },
    {
      name: '岩田さん:岩田聡はこんなことを話していた。',
      detail: '任天堂の元社長、岩田聡さんのことばをまとめた本',
      evaluation: 90
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
