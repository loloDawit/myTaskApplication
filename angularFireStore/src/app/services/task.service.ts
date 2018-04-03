import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Task } from '../models/task'; 
import { Observable } from 'rxjs/observable'; 
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable()
export class TaskService {
  taskCollection:AngularFirestoreCollection<Task>; 
  tasks: Observable<Task[]>;
  taskDoc: AngularFirestoreDocument<Task>;

  constructor(public afStore:AngularFirestore) {
    //this.tasks = this.afStore.collection('tasks').valueChanges(); 
    this.taskCollection = this.afStore.collection('tasks', ref => ref.orderBy('title','asc')); 
    this.tasks =  this.taskCollection.snapshotChanges().map(changes =>{
      return changes.map(a =>{
        const data = a.payload.doc.data() as Task; 
        data.id = a.payload.doc.id; 
        return data; 

      }); 
    }); 
   }

   getTasks(){
     return this.tasks; 
   }
   // add task 
   addTask(task:Task){
     this.taskCollection.add(task); 
   }
   // delete task
   deleteTask(task:Task){
     this.taskDoc = this.afStore.doc(`tasks/${task.id}`);
     this.taskDoc.delete(); 
   }
   updateTask(task){
    this.taskDoc = this.afStore.doc(`tasks/${task.id}`);
    this.taskDoc.update(task); 
   }

}

