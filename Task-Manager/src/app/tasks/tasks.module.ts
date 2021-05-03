import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { TasksRoutingModule } from './tasks-routing.module';
import { CreateTaskComponent } from './create-task/create-task.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { ViewAllTasksComponent } from './view-all-tasks/view-all-tasks.component';

@NgModule({
  declarations: [
    CreateTaskComponent,
    ViewTaskComponent,
    UpdateTaskComponent,
    ViewAllTasksComponent,
   
    
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    FormsModule,
  ],
  providers:[]
})
export class TasksModule { }
