import { Component, inject, OnInit, signal, Signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../model/todo.type';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit{
  todos = signal<Array<Todo>>([]);
  

  todoService = inject(TodosService);
  ngOnInit(): void {
    this.todoService.getTodosFromApi().subscribe(
      (data: any[]) => {
        this.todos.set(data);
      },
      (error) => {
        console.error('Error fetching todos:', error);
      }
    );
  }
  
}
