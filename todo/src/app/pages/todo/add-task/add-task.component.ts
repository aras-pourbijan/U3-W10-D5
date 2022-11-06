import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/todo.class';
import { TodosService } from 'src/app/todos.service';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  title: string = ''

  constructor(private TodosService: TodosService) { }

  ngOnInit(): void {
  }

  addTask(title: string) {
    if (title.length === 0) {
      alert('please insert a new task!')
    } else {
      this.TodosService.addTask(title)
      this.title = ''

    }
  }

}