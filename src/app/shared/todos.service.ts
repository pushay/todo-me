import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
import { Todo } from './todos.model';


@Injectable({
    providedIn: 'root',
  })

export class TodoService {
    todosChanging = new Subject<Todo[]>();
    clearTodosChanging = new Subject<Todo[]>();
    todos:Todo[] = [];
    clearTodos:Todo[]= [];

    getTodos(){
        return this.todos
    }

    getClearTodos(){
        return this.clearTodos
    }

    addTodo(name, category, status){
        this.todos.push({name, category, status});
        this.clearTodos.push({name, category, status});
        this.todosChanging.next(this.todos);
        this.clearTodosChanging.next(this.todos)
    }

    updateTodo(todos){
        this.todos = todos;
        this.todosChanging.next(this.todos);
    }

    updateMarks(todos){
        this.clearTodos = todos;
        this.clearTodosChanging.next(this.todos);
        this.todos = todos;
        this.todosChanging.next(this.todos);
    }

    
}

