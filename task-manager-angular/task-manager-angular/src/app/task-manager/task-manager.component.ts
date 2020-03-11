import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {

  tasks: Task[];

  constructor(private taskService: TaskService) { }

  getTasks() {
    this.tasks = this.taskService.getTasks();
  }

  ngOnInit(): void {
    this.getTasks();
  }

}
