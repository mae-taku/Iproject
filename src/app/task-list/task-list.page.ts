import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.page.html',
  styleUrls: ['./task-list.page.scss'],
})
export class TaskListPage implements OnInit {
  tasks: { name: string }[] = [
    { name: 'タスク1' },
    { name: 'タスク2' },
  ];

  constructor(
    public actionSheetController: ActionSheetController,
    public alertController: AlertController,
  ) { }

  ngOnInit() {
  }
  ionVieWillEnter() {
    if ('tasks' in localStorage) {
      this.tasks = JSON.parse(localStorage.getItem("tasks") || "");
    }
  }

  /**
   * async/await 非同期処理
   * 他の処理を待たずに他の処理を行う。
   */
  async doChangeTask(index: number) {
    const actionSheet = await this.actionSheetController.create({
      header: 'タスクの変更',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.tasks.splice(index, 1);
          localStorage.setItem("tasks",JSON.stringify(this.tasks));
          console.log('Delete clicked');
        }
      }, {
        text: 'Change',
        icon: 'create',
        handler: () => {
          this._renameTask(index);
          console.log('Archive clicked');
        }
      }, {
        text: 'Close',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });

    await actionSheet.present();
  }

  async _renameTask(index: number){
    const prompt = await this.alertController.create({
      header: '変更後のタスク',
      inputs: [
        {
          name: 'task',
          placeholder: 'タスク',
          value: this.tasks[index].name
        },
      ],
      buttons: [
        {
          text: 'close'
        },
        {
          text: 'change',
          handler: data => {
            this.tasks[index] = { name:data.task };
            localStorage.setItem("tasks",JSON.stringify(this.tasks));
          }
        }
      ]
    });
    prompt.present();
  }

}
