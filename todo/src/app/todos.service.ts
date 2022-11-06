import { Injectable } from '@angular/core';
import { Todo } from './todo.class';

@Injectable({
  providedIn: 'root'
})

export class TodosService {
  //   let task = item.title
  //   task = replace()
  // }

  addTodo(task: Todo) {
    throw new Error('Method not implemented.');
  }

  todoList: Todo[] = [];
  completeList: Todo[] = []



  constructor() { }
  recoverIt(item: Todo) {
    this.completeList.filter

  }
  addTask(title: string) {
    let task = new Todo(title)

    this.todoList.push(task)


  }

  checkedIt(item: Todo) {
    let index = this.todoList.indexOf(item)
    this.todoList.splice(index, 1);
    this.completeList.push(item);
    console.log(this.completeList);
  }

  // mi sono bloccato!

  // editIt(item: Todo) {
  //   let task = item.title
  //   task = replace()

  // }

  checkTask(item: Todo) {


  }

  //   setTimeout(function() {
  //  //your code here
  // }, 1000);
}


