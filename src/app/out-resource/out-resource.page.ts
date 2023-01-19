import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-out-resource',
  templateUrl: './out-resource.page.html',
  styleUrls: ['./out-resource.page.scss'],
})
export class OutResourcePage implements OnInit {

  // 記事のプロパティ
  posts: {
    ID: number;
    title: string;
    content: string;
    date: string
  }[] = [];

  constructor(
    ) {}

  ngOnInit() {
  }

}
