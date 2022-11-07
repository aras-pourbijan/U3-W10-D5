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
  addTask(title: string) {
    let task = new Todo(title)
    // ++task.id non sono riuscito a systemare ID!
    this.todoList.push(task)
  }

  checkedIt(item: Todo) {
    let index = this.todoList.indexOf(item)
    this.todoList.splice(index, 1);
    this.completeList.push(item);
    console.log(this.completeList);
  }
  unchecked(item: Todo) {
    let index = this.completeList.indexOf(item)
    this.completeList.splice(index, 1);
    this.todoList.push(item);
    console.log(this.todoList);
  }

  deleteTodoTask(item: Todo) {
    let index = this.todoList.indexOf(item)
    this.todoList.splice(index, 1);
  }
  deletecompleteTask(item: Todo) {
    let index = this.completeList.indexOf(item)
    this.completeList.splice(index, 1);
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


