import { Component, ViewChild, ElementRef, EventEmitter, Output } from "@angular/core";


@Component({
    selector:'app-main-modal',
    templateUrl:'./main-modal.component.html',
    // styleUrls:['../../../SCSS/layout/_main-modal.scss']
})

export class MainModalComponent{
    @ViewChild('modal',{static:false})modal:ElementRef;
    @Output() sentListName = new EventEmitter<string>();
    @ViewChild('settings',{static:false})settings:ElementRef;
    @ViewChild('listName',{static:false})listName:ElementRef;
    text:string;

    sendListName(value:string){
        this.sentListName.emit(value);
        this.listName.nativeElement.value = '';
    }

    openModal(){
        this.modal.nativeElement.style.display = 'block';
    }

    closeModal(){
        this.modal.nativeElement.style.display = 'none';
    }

}