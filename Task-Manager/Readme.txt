Steps for run application

1)Please do npm install
2)npm install bootstrap
3)In angular.json , under styles add
"node_modules/bootstrap/dist/css/bootstrap.min.css"
4)npm install -g json-server
5)go to assets/data, then if you are in data directory
then json-server --watch db.json.
(I have used json-server as fake REST API for creating task and updating tasks)
6)ng serve 

7)Default you can see all tasks
8)When you click on Task Name on Each Task ,
will redirect to view-task page.

9)If the due date is expired then update Task button 
will not be visible in view-task page.

10)In create task Ihave added minimum validation.

11)Now I have added string itself.
Didn't get time for creating object as en-US.Json.


