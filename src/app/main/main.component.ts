import { Component, ViewChild} from "@angular/core";



@Component({
    selector:'app-main',
    templateUrl:'./main.component.html',
    // styleUrls:['../../SCSS/pages/_main.scss']
})

export class MainComponent  {
    name:string;
    @ViewChild('modalComponent')modal

    onGettingListName(listName:string){
        this.name = listName;
    }

}