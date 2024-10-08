//*** TEMPLATE DRIVEN ***/
// import { afterNextRender, Component, DestroyRef, inject, viewChild } from '@angular/core';
// import { FormsModule, NgForm } from '@angular/forms';
// import { debounceTime } from 'rxjs';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [FormsModule],
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css',
// })
// export class LoginComponent {
//   private readonly form = viewChild.required<NgForm>('form');
//   private readonly destrroyRef = inject(DestroyRef);

//   constructor() {
//     afterNextRender(() => {
//       const savedForm = window.localStorage.getItem('saved-login-form');

//       if(savedForm) {
//         const loadedFormData = JSON.parse(savedForm);
//         const savedEmail = loadedFormData.email;

//         setTimeout(() => {
//           this.form().controls['email'].setValue(savedEmail);

//           // this.form().setValue({
//           //   email: savedEmail,
//           //   password: ''
//           // });
//         }, 1);
//       }

//       const subscription = this.form().valueChanges?.pipe(debounceTime(500)).subscribe({
//         next: (value) =>
//           window.localStorage.setItem(
//             'saved-login-form',
//             JSON.stringify({ email: value.email })
//           ),
//       });

//       this.destrroyRef.onDestroy(() => subscription?.unsubscribe());
//     });
//   }


//   onSubmit(formData: NgForm) {
//     if (formData.form.invalid) {
//       console.log('invalid');
//       return;
//     }

//     const enteredEmail = formData.form.value.email;
//     const enteredPassword = formData.form.value.password;

//     console.log(enteredEmail, enteredPassword);

//     formData.form.reset();
//   }

// }

//*** REACTIVE FORM ***/
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {}
