import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatCardComponent } from './cat-card/cat-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material-module';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { EditableCatCardComponent } from './editable-cat-card/editable-cat-card.component';
import { CardOrganizerComponent } from './card-organizer/card-organizer.component';
import { TabLayoutComponent } from './tab-layout/tab-layout.component';
import { CatCardAddComponent } from './cat-card-add/cat-card-add.component';

@NgModule({
  declarations: [
    AppComponent,
    CatCardComponent,
    ImageCarouselComponent,
    EditableCatCardComponent,
    CardOrganizerComponent,
    TabLayoutComponent,
    CatCardAddComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatButtonModule, 
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
