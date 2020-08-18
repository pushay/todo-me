import { Component, ViewChild, ElementRef, OnInit, OnDestroy} from "@angular/core";
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { TodoService } from 'src/app/shared/todos.service';
import { Subscription } from 'rxjs';
import { Todo } from 'src/app/shared/todos.model';


@Component({
    selector:'app-main-lists-list-items',
    templateUrl:'./main-lists-list-items.component.html',
    // styleUrls:['../../../../../SCSS/components/_mainListsListItems.scss']   
})

export class MainListsListItemsComponent implements OnInit, OnDestroy  {
    todos;
    clearTodos;
    edited:boolean = false;
    @ViewChild('mark',{static:false})mark:ElementRef
    form = new FormGroup({
        newName : new FormControl(null, Validators.required)
    })
    private subscription:Subscription

    constructor(private todoService:TodoService){}

    ngOnInit(){
        this.todos = this.todoService.getTodos();
        this.subscription = this.todoService.todosChanging.subscribe((todosSub:Todo[])=> {
            this.todos = todosSub
        });
        this.clearTodos = this.todoService.getClearTodos();
        this.subscription = this.todoService.clearTodosChanging.subscribe((todosSub:Todo[])=> {
            this.clearTodos = todosSub
    });}
    

    getName():AbstractControl {
        return this.form.get('newName').value
    }
    

    deleteTodos(i){
        this.todos.splice(i,1)
    }

    changeName(key, i){
        if (key.key === 'Enter'){
            this.todos[i]['name'] = this.getName();
            this.edited = false;
        }
    }

    editTodo(i){
        this.edited = true;
    }

    changeMark(i, event){
        this.todos[i]['status'] = 'completed';
        event.target.src = '../../../../../assets/images/checkbox-checked.png';
        this.todoService.updateMarks(this.todos)
    }

    changeIcon(i){
        switch(this.todos[i]['category']) {
            case 'school':
                return '../../../../../assets/images/book.png';
            case 'home':
                return '../../../../../assets/images/home.png';
            case 'work':
                return '../../../../../assets/images/library.png';
            case 'food':
                return '../../../../../assets/images/spoon-knife.png';
            case 'health':
                return '../../../../../assets/images/aid-kit.png';
            case 'important':
                return '../../../../../assets/images/bell.png';
            case 'fun':
                return '../../../../../assets/images/accessibility.png'
            default:
                break
        }
    }

    ngOnDestroy(){
        this.subscription.unsubscribe()
    }

}