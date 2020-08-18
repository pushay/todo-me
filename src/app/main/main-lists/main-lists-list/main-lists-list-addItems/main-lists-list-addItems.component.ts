import { Component, Output, EventEmitter } from "@angular/core";
import { TodoService } from 'src/app/shared/todos.service';

@Component({
    selector:'app-main-lists-list-addItems',
    templateUrl:'./main-lists-list-addItems.component.html',
    // styleUrls:['../../../../../SCSS/components/_mainListsListAddItems.scss']
})

export class MainListsListAddItemsComponent {
    name:string;
    category:string;
    submited:boolean = false;
    todoPyramid:Array<string> = ['school', 'work', 'health', 'fun', 'important', 'food','home']

    constructor(private todoService:TodoService){}

    onSubmit(form){
        this.submited = true;
        this.todoService.addTodo(form.value.name, form.value.category, 'uncompleted')
    }
}