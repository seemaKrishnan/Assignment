import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTaskComponent } from './create-task/create-task.component';

import { UpdateTaskComponent } from './update-task/update-task.component';
import { ViewAllTasksComponent } from './view-all-tasks/view-all-tasks.component';
import { ViewTaskComponent } from './view-task/view-task.component';



const routes: Routes = [
  { path: '', component: ViewAllTasksComponent },
  {path:'create-task',component:CreateTaskComponent},
  {path:'update-task/:id',component:UpdateTaskComponent},
  {path:'view-task/:id',component:ViewTaskComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
