import { Component, ViewChild, ElementRef, Input, Output, EventEmitter, AfterViewInit, OnInit } from "@angular/core";



@Component({
    selector:'app-main-lists-list',
    templateUrl:'./main-lists-list.component.html',
    // styleUrls:['../../../../SCSS/components/_mainListsList.scss'],
    host:{
        "(window:click)":"closeDropdown()"
    }
})

export class MainListsListComponent {
    dropdownVisible:boolean = false;
    @ViewChild('list',{static:false})list:ElementRef;
    @Input()name :string;
    @Input()modalComponent;
    @Input()lists :boolean;
    @Output()listValueChange = new EventEmitter<string>();
    submited:boolean = false;


    deleteList(){
        this.list.nativeElement.remove();
        this.lists = false;
        this.name = '';
    }
    
    sendList(){
        this.listValueChange.emit(this.name)
    }

    toggleMenu($event){
        $event.stopPropagation();
        this.dropdownVisible = !this.dropdownVisible
    }
    closeDropdown(){
        this.dropdownVisible = false;
    }
    changeSubmitValue(value){
        this.submited = value;
    }
    

}