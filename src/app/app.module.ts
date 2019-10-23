import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConstructorComponent } from './components/constructor/constructor.component';
import { ConstructorNavigationComponent } from './components/constructor-navigation/constructor-navigation.component';
import { ConstructorContentComponent } from './components/constructor-content/constructor-content.component';
import { ConstructorFilterComponent } from './components/constructor-filter/constructor-filter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    ConstructorComponent,
    ConstructorNavigationComponent,
    ConstructorContentComponent,
    ConstructorFilterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatMenuModule,
    MatStepperModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
