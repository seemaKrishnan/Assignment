import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
 taskName: string='';
 showMsg:boolean=false;
 description:string='';
 status:string='';
 dueDate:Date;
  constructor(private taskService: TaskService) { 
    
  }

  ngOnInit(): void {
    
  }
  
  /*
  Function for form submission
  */

  onFormSubmit(createTask:NgForm){
    let newTask={
    id:createTask.value.id+1,
    taskName:createTask.value.taskName,
    description:createTask.value.description,
    dueDate:createTask.value.dueDate,
    status:createTask.value.status,
    }
   this.taskService.createTask(newTask)
   .subscribe(data=>{
    this.showMsg= true;
    console.log(data)}); 
   }
}
