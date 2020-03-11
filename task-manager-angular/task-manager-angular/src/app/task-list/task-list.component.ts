import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @Input() tasks: Task[];

  constructor(private taskService: TaskService) { }

  getTasks(): void {
    this.taskService.getTasks()
      .subscribe(tasks => this.tasks = tasks);
  }

  ngOnInit(): void {
    this.getTasks();
  }

}
