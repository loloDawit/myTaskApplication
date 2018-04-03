import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { environment } from '../environments/environment.prod';
import { AngularFireModule } from 'angularfire2'; 
import { AngularFirestoreModule } from 'angularfire2/firestore'; 



import { AppComponent } from './app.component';
import { TasksComponent } from './components/tasks/tasks.component';

import { TaskService } from './services/task.service';
import { NavabarComponent } from './components/navabar/navabar.component';
import { AddItemComponent } from './components/add-item/add-item.component'; 
@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    NavabarComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase, 'angularFireStore')
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
