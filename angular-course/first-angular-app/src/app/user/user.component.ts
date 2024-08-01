import { Component, computed, EventEmitter, Input, input, output, Output } from '@angular/core';

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
  id = input.required<string>();
  avatar = input.required<string>();
  name = input.required<string>();

  select = output<string>();

  imagePath = computed(() => {
    return '../../assets/users/' + this.avatar()
  });
  
  onSelectUser() {
    this.select.emit(this.id())
  }
}
