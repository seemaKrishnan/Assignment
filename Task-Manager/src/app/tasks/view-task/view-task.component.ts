import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service';
import { Task } from '../task';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {
taskId=0;
taskDetails:Task;
public dueDate;
public diff;
days=1000*60*60*24;
public due;
public isEditable=false;
  constructor( private activatedRoute: ActivatedRoute,
              private taskService: TaskService) { 

  }
  ngOnInit(): void {
    let today = new Date();
    this.activatedRoute.params.subscribe(
      data => {this.taskId=data.id
      console.log(this.taskId)
      })
      
  this.taskService.viewTask(this.taskId)
  .subscribe(taskData => {
    
    this.taskDetails=taskData;
    console.log(this.taskDetails);
    this.dueDate=this.taskDetails.dueDate;
     this.due=new Date(this.dueDate);
  if(today<this.due){
   this.isEditable=true;
  }
  else  { 
    this.isEditable=false; 
  }
})   
}
}


