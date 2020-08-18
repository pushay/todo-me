import { Component, Input} from "@angular/core";


@Component({
    selector:'app-main-lists',
    templateUrl:'./main-lists.component.html',
    // styleUrls:['../../../SCSS/components/_mainLists.scss']
})

export class MainListsComponent {
    @Input()modalComponent;
    @Input()name :string;
    lists:boolean = false;
   
    updateListsValue(value){
        this.lists = value;
        this.name = ''
    }

    openingModal(){
        this.lists = true;
        this.modalComponent.openModal();
    }

}