import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/todo.class';
import { TodosService } from 'src/app/todos.service';



@Component({
  templateUrl: './complete.page.html',
  styleUrls: ['./complete.page.scss']
})
export class CompletePage implements OnInit {

  constructor(private TodoSerivce: TodosService) { }

  completeList: Todo[] = this.TodoSerivce.completeList
  ngOnInit(): void {
  }
  recoverTask(item: Todo) {
    this.TodoSerivce.recoverIt(item)
  }

}

