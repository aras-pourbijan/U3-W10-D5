import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/todos.service';

@Component({
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss']
})
export class TodoPage implements OnInit {

  constructor(private TodosService: TodosService) { }

  ngOnInit(): void {
  }

}