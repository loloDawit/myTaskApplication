import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service'; 
import { Task } from '../../models/task'; 

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  task:Task = {
    title:'', 
    description:''
  }

  constructor(private taskService:TaskService) { }

  ngOnInit() {
  }
  onSubmit(){
    if(this.task.title != '' && this.task.description != ''){
      this.taskService.addTask(this.task); 
      this.task.title = ''; 
      this.task.description = ''; 
    }
  }

}
