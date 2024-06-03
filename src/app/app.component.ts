import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TodoGroupComponent } from './components/todo-group/todo-group.component';
import { TodoGroup, TodoStatus } from './domain/todo-group';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoGroupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public todoGroups: TodoGroup[];

  constructor() {
    this.todoGroups = [
      {
        title: 'Todo Group 1',
        items: [
          {
            title: 'Todo Item 1',
            status: TodoStatus.Todo,
            description: 'This is a description for Todo Item 1',
          },
          {
            title: 'Todo Item 2',
            status: TodoStatus.Todo,
            description: 'This is a description for Todo Item 1',
          },
          {
            title: 'Todo Item 3',
            status: TodoStatus.Todo,
            description: 'This is a description for Todo Item 1',
          },
        ],
      },
    ];
  }
}
