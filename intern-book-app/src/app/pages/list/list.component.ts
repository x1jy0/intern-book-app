import { Component, OnInit } from '@angular/core';
import { book } from '../../book'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  title='読んだ本';

  constructor() { }

  ngOnInit(): void {
  }

}

export const bookList: book[] = []
