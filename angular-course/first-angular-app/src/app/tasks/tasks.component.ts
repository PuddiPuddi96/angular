import { Component, input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { DUMMY_TASKS } from '../dummy-data/dummy-tasks';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent {
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
}
