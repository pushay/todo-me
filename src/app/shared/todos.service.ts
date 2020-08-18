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
        console.log(this.todos)
        return this.todos
    }

    getClearTodos(){
        console.log(this.clearTodos)
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
        console.log(this.clearTodosChanging, 'clear ones')
        console.log(this.todosChanging, 'todos')
    }

    updateMarks(todos){
        this.clearTodos = todos;
        this.clearTodosChanging.next(this.todos);
        this.todos = todos;
        this.todosChanging.next(this.todos);
    }

    
}

