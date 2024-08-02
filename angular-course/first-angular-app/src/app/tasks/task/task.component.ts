import { Component, input, output } from '@angular/core';
import { type Task } from './task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  task = input.required<Task>();

  complete = output<string>();

  onCompleteTaskSimple() {
    this.complete.emit(this.task().id)
  }
}
