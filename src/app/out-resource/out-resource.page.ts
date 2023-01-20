import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IPost } from '../interfaces/post';

@Component({
  selector: 'app-out-resource',
  templateUrl: './out-resource.page.html',
  styleUrls: ['./out-resource.page.scss'],
})
export class OutResourcePage {

  // 記事のプロパティ
  posts: IPost[] = [];
  // posts: any = [];

  constructor(
    public http: HttpClient,
    ) {}


  ionViewDidEnter() {
    this.http.get('https://public-api.wordpress.com/rest/v1.1/sites/ionicjp.wordpress.com/posts/')
    .subscribe(response => {
      this.setData(response);
    });
  }
  setData(response: any){
    this.posts = response['posts'];
  }
}
