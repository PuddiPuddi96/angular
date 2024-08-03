import { Component, input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { DUMMY_TASKS } from '../dummy-data/dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTask } from './new-task/new-task.model';

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

  tasks = DUMMY_TASKS;

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId == this.userId())
  }

  onCompleteTask(id: string){
    console.log(id)
    this.tasks = this.tasks.filter((task) => task.id !== id)
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(task: NewTask) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: this.userId(),
      title: task.title,
      summary: task.summary,
      dueDate: task.date,
    })
    this.isAddingTask = false;
  }
}
