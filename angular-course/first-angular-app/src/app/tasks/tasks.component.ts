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

  get selectedUserTasks() {
    return DUMMY_TASKS.filter((task) => task.userId == this.userId())
  }
}
