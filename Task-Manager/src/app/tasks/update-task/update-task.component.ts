import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service';
import { Task } from '../task';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {
  taskId=0;
  taskDetails:Task;
  showMsg:boolean=false;
  constructor(private activatedRoute: ActivatedRoute,
              private taskService: TaskService) {
   
   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.taskId = data.id;
      this.taskService.viewTask(this.taskId)
      .subscribe(data=>{
        console.log(data)
        this.taskDetails = data;
        console.log(this.taskDetails)//get the existing data of the task
      })
    })
  }
  /* 
  Function for update task
  */
  updateShoppingForm(form){
    const updateTask={
      id:form.value.id,
    taskName:form.value.taskName,
    description:form.value.description,
    status:form.value.status,
    dueDate:form.value.dueDate
    }
    
    this.taskService.updateTask(this.taskId,updateTask).subscribe(data=>{
      console.log(data);
      this.showMsg=true;
    })
  }

}
