import { Component, inject, input } from '@angular/core';
import { type Task } from './task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  private tasksService = inject(TasksService); 

  task = input.required<Task>();

  onCompleteTaskSimple() {
    this.tasksService.removeTask(this.task().id)
  }
}
