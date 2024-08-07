import { Component, inject, input, output, signal } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  userId = input.required<string>()

  close = output();

  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDueDate = signal('');

  //another altenrative to inject
  private tasksService = inject(TasksService);

  onClose() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle(),
        summary: this.enteredSummary(),
        date: this.enteredDueDate()
      },
      this.userId()
    );
      this.close.emit();
  }

}
