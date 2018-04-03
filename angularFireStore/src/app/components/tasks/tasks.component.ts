import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service'; 
import { Task } from '../../models/task'; 

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks:Task[]; 
  editState: boolean = false; 
  taskToEdit:Task; 


  constructor(private taskService:TaskService) { }

  ngOnInit() {
    this.taskService.getTasks().subscribe(tasks =>{
      console.log(tasks); 
      this.tasks = tasks; 

    }); 
  }
  deleteItem(event,task:Task){
    this.clearState(); 
    this.taskService.deleteTask(task);
  }
  editTask(event,task:Task){
    this.editState = true; 
    this.taskToEdit = task; 
  }
  updateTask(task:Task){
    this.taskService.updateTask(task); 
    this.clearState(); 

  }
  clearState(){
    this.editState = false; 
    this.taskToEdit = null; 
  }




}
