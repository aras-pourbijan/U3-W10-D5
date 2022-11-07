import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/todo.class';
import { TodosService } from 'src/app/todos.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  todoList: Todo[] = []
  constructor(private TodosService: TodosService) { }

  ngOnInit(): void {
    this.todoList = this.TodosService.todoList
  }

  checkedTask(item: Todo) {
    this.TodosService.checkedIt(item)

  }
  completeTask(item: Todo) {
    this.TodosService.checkTask(item);
  }
  deleteTodoTask(item: Todo) {
    this.TodosService.deleteTodoTask(item)
  }
}