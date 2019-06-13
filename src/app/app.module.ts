import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreatepageComponent } from './createpage/createpage.component';
import { RetrivepageComponent } from './retrivepage/retrivepage.component';
import { AppRoutingModule } from './app.route';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RetriveService } from './retrive.service';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatepageComponent,
    RetrivepageComponent,
    UpdateComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [RetriveService],
  bootstrap: [AppComponent]
})


export class AppModule { }

