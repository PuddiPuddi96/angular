import { Component, computed, Input, input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

//Without signal
// export class UserComponent {
//   @Input({required: true}) avatar!: string;
//   @Input({required: true}) name!: string;

//   get imagePath() {
//     return '../../assets/users/' + this.avatar;
//   }
  
//   onSelectUser() { }
// }

//With signal
export class UserComponent {
  //they are read-ony, Can't use .set
  avatar = input.required<string>();
  name = input.required<string>();

  imagePath = computed(() => {
    return '../../assets/users/' + this.avatar()
  });
  
  onSelectUser() { }
}
