import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  users = DUMMY_USERS; //Expose import data in the template of this component
  selectedUserId?: string
  title = 'first-angular-app';

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
