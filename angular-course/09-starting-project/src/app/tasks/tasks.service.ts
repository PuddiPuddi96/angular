import { Injectable, signal } from "@angular/core";
import { Task } from "./task.model";

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private task = signal<Task[]>([]);

  allTasks = this.task.asReadonly();

  addTask(taskData: {title: string; description: string}) {
    const newTask: Task = {
      ...taskData,
      status: 'OPEN',
      id: Math.random().toString(),
    };
    this.task.update(
      (oldTasks) => [...oldTasks, newTask]
    );
  }

}
