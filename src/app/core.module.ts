import {NgModule} from '@angular/core';
import { TodoService } from './shared/todos.service';

// ADD SERVIES HERE LATER
@NgModule({
    providers:[
        TodoService
    ]

})
export class CoreModule{}