import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {
  title = 'タスク登録';
  tasks : { name: string}[] =[
    { name: 'タスク1'},
    { name: 'タスク2'},
  ];
  task: string;

  constructor() { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    if ('tasks' in localStorage){
      this.tasks = JSON.parse(localStorage.getItem("tasks") || "");
    }
  }

  addTask(){
    this.tasks.push({
      name: this.task
    });
    localStorage.setItem("tasks",JSON.stringify(this.tasks));
    this.task = '';
  }

  onClickAllClear(){
    localStorage.clear();
  }

}
