import { Component, computed, input, output } from '@angular/core';
import { type User } from './user.model';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

//Without signal
// export class UserComponent {
//   @Input({required: true}) avatar!: string;
//   @Input({required: true}) name!: string;

//   @Output() select = new EventEmitter<string>()

//   get imagePath() {
//     return '../../assets/users/' + this.avatar;
//   }
  
//   onSelectUser() { 
//    this.select.emit(this.id)
//}
// }

//With signal
export class UserComponent {
  //they are read-ony, Can't use .set
  user = input.required<User>();
  selected = input.required<boolean>();

  select = output<string>();

  imagePath = computed(() => {
    return '../../assets/users/' + this.user().avatar
  });
  
  onSelectUser() {
    this.select.emit(this.user().id)
  }
}
