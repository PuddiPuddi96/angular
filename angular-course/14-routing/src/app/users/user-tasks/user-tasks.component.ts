// import { Component, computed, inject, input } from '@angular/core';
// import { UsersService } from '../users.service';

// @Component({
//   selector: 'app-user-tasks',
//   standalone: true,
//   templateUrl: './user-tasks.component.html',
//   styleUrl: './user-tasks.component.css',
// })
// export class UserTasksComponent {
//   userId = input.required<string>();
//   private usersService = inject(UsersService);

//   userName = computed(
//     () => this.usersService.users.find((u) => u.id === this.userId())?.name
//   );
// }

import { Component, DestroyRef, inject, input, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent implements OnInit {
  userName = '';
  message= input.required<string>();

  private usersService = inject(UsersService);
  private activatedRoute = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    console.log('Input data: ' + this.message());
    console.log(this.activatedRoute);
    
    const subscription = this.activatedRoute.paramMap.subscribe({
      next: (paramMap) => {
        this.userName =
          this.usersService.users.find((u) => u.id === paramMap.get('userId'))
            ?.name || '';
      },
    });

    this.destroyRef.onDestroy(() => subscription.unsubscribe())
  }
}
