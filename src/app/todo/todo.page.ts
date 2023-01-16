import { Component, OnInit } from '@angular/core';

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

  addTask(){
    this.tasks.push({
      name: this.task
    });
    this.task = '';
  }

}
