import { Injectable } from "@angular/core";
import { DUMMY_TASKS } from "../dummy-data/dummy-tasks";
import { NewTask } from "./new-task/new-task.model";

/**
 * such a service then typically is that it performs some operation and/or manages some data that might be needed by one or more other Components.
 */
@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks = DUMMY_TASKS;

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId == userId);
  }

  addTask(task: NewTask, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: task.title,
      summary: task.summary,
      dueDate: task.date,
    })
  }

  removeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId)
  }

}
