import { Component, Output, EventEmitter, OnInit, OnDestroy } from "@angular/core";
import { TodoService } from 'src/app/shared/todos.service';
import { Subscription } from 'rxjs';
import { Todo } from 'src/app/shared/todos.model';



@Component({
    selector:'app-dropdown',
    templateUrl:'./dropdown.component.html',
    // styleUrls:['../../../SCSS/components/_dropdown.scss']
})

export class DropdownComponent implements OnInit, OnDestroy {
    sorts:Array<{name:string, text:string}> = [{name:'clear Sort', text:'clearSort'}, {name:'sort alphabetically', text:'sortAlphabetically'}, {name:'hide completed', text:'hideCompleted'} ,{name:'sort by category', text:'sortByCategory'}];
    @Output()sortedTodos = new EventEmitter<Array<{name:string, text:string}>>();
    todos:Todo[] = [];
    clearTodoss:Todo[] = [];
    subscription:Subscription;

    constructor(private todoService:TodoService){}

    ngOnInit(){
        this.todos= this.todoService.getTodos()
        this.subscription = this.todoService.todosChanging.subscribe((todos:Todo[])=> {
            this.todos = todos
        })
        this.clearTodoss = this.todoService.getClearTodos();
        this.subscription = this.todoService.clearTodosChanging.subscribe((todos:Todo[])=> {
            this.clearTodoss = todos
        })
    }

   sortTodos(value){
       let sortTodos = [...this.clearTodoss];
    if ('clearSort' == value) {
        sortTodos = this.clearTodoss
    }
    if ('sortAlphabetically' == value){
        sortTodos.sort((a,b)=> {
            if (a['name'] < b['name']) return -1;
            if (a['name'] > b['name']) return 1;
            return 0;
        })
    }
    if ('hideCompleted'== value) {
        sortTodos = sortTodos.filter((todo)=> { 
           if (todo['status'] !== 'completed') return true
           return false
        })
    }
    if ('sortByCategory' == value){
        sortTodos.sort((a,b)=> {
            if (a['category'] < b['category']) return -1;
            if (a['category'] > b['category']) return 1;
                return 0;
        })
    }   this.todoService.updateTodo(sortTodos)
  
    }
    ngOnDestroy(){
        this.subscription.unsubscribe()
    }
    
}