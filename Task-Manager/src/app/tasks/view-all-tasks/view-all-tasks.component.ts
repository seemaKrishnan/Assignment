import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service';
import { Task } from '../task';

@Component({
  selector: 'app-view-all-tasks',
  templateUrl: './view-all-tasks.component.html',
  styleUrls: ['./view-all-tasks.component.css']
})
export class ViewAllTasksComponent implements OnInit {
  taskId=0;
taskList:Task;
public isEditable:boolean = false;
  constructor(private taskService: TaskService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      console.log(data)
      this.taskId=data.id;
    })
    this.taskService.getAllTasks().subscribe(data=>{
  this.taskList=data;
}) 
}
}
