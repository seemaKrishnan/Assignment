import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './task';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpClient: HttpClient) {

   }
   createTask(taskBody):Observable<Task> {
    const taskUrl='http://localhost:3000/tasks';
    return this.httpClient.post<Task>(taskUrl,taskBody);
   }
   viewTask(taskId):Observable<Task>{
    const taskUrl='http://localhost:3000/tasks/'+taskId;
    return this.httpClient.get<Task>(taskUrl);
  
   }
   updateTask(taskId,taskBody):Observable<Task> {
    const taskUrl='http://localhost:3000/tasks/'+taskId;
    return this.httpClient.put<Task>(taskUrl,taskBody);
  
   }
   deleteTask(taskId):Observable<Task>{
    const taskUrl='http://localhost:3000/tasks?taskId='+taskId;
    return this.httpClient.delete<Task>(taskUrl);
  
   }
   searchCategoryTask(categoryId):Observable<Task>{
    const taskUrl='http://localhost:3000/tasks'+categoryId;
    return this.httpClient.get<Task>(taskUrl);
  
   }
   getAllTasks():Observable<Task>{
    const taskUrl='http://localhost:3000/tasks';
    return this.httpClient.get<Task>(taskUrl)
   }
}
