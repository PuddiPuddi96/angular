import { Injectable, signal } from "@angular/core";
import { Task } from "./task.model";

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  task = signal<Task[]>([]);

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
