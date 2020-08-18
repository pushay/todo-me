import { Component, Input } from "@angular/core";

@Component({
    selector:'app-button',
    templateUrl:'./button.component.html',
    // styleUrls:['../../../SCSS/components/_button.scss']
})

export class ButtonComponent {
    @Input() label:string;
}