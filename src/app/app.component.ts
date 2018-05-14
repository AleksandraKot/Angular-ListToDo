import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Todo sample app';
  lists = {
    todo: {
      name: 'To do',
      tasks: [
        {name: 'Todo #1', done: false},
        {name: 'Todo #2', done: false},
        {name: 'Todo #3', done: false},
        {name: 'Todo #4', done: false},
      ]
    },
    done: {
      name: 'Done',
      tasks: [
        {name: 'Todo #5', done: true},
        {name: 'Todo #6', done: true}
      ]
    }
  }

}
