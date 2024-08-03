import { Component, input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { DUMMY_TASKS } from '../dummy-data/dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTask } from './new-task/new-task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
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

  onCompleteTask(id: string){
    this.tasksService.removeTask(id)
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(task: NewTask) {
    this.tasksService.addTask(task, this.userId())
    this.isAddingTask = false;
  }
}
