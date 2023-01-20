import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
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
    public loadingController: LoadingController,
    ) {}


    async  ionViewDidEnter() {
      const loading = await this.loadingController.create({
        message: 'Loading...',
        spinner: 'bubbles'
      });
      await loading.present();
    this.http.get('https://public-api.wordpress.com/rest/v1.1/sites/ionicjp.wordpress.com/posts/')
    .subscribe(response => {
      this.setData(response);
      loading.dismiss();
    });
  }
  /**
   * 書籍通りすると、以下のエラーになる。
   * 型 '"posts"' の式を使用して型 'Object' にインデックスを付けることはできないため、要素は暗黙的に 'any' 型になります。
   * プロパティ 'posts' は型 'Object' に存在しません。
   * →明示的に、オブジェクトの型をanyとする。
   * @param response
   */
  setData(response: any){
    this.posts = response['posts'];
  }
}
