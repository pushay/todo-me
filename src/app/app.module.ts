import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms'
import { CoreModule } from './core.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { MainComponent } from './main/main.component';
import { MainModalComponent } from './main/main-modal/main-modal.component';
import { MainListsComponent } from './main/main-lists/main-lists.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { MainListsListComponent } from './main/main-lists/main-lists-list/main-lists-list.component';
import { MainListsListItemsComponent } from './main/main-lists/main-lists-list/main-lists-list-items/main-lists-list-items.component';
import { MainListsListAddItemsComponent } from './main/main-lists/main-lists-list/main-lists-list-addItems/main-lists-list-addItems.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent, 
    MainComponent,
    MainModalComponent,
    MainListsComponent,
    DropdownComponent,
    MainListsListComponent,
    MainListsListAddItemsComponent,
    MainListsListItemsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
