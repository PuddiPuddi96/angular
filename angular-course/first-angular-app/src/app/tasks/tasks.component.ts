import { Component, input } from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent {
  isAddingTask = false;

  userId = input.required<string>()
  name = input.required<string>()

  constructor(
    private tasksService: TasksService
  ) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId())
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

}
