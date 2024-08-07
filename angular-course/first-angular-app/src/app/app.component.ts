import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-data/dummy-users';

@Component({
  selector: 'app-root',
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
