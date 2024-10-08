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
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, of } from 'rxjs';

function mustContainsQuestionMark(control: AbstractControl) {
  if(control.value.includes('?')) {
    return null;
  }

  return { doesNotContainQuestionMark: true };
}

//Simulate http request to backend
function emailIsUnique(control: AbstractControl) {
  if(control.value !== 'test@example.com'){
    return of(null);
  }

  return of({ notUnique: true });
}

//For client-side application
//Not working for server-side pre-rendering
let initialEmailValue = '';
const savedForm = window.localStorage.getItem('saved-login-form');

if(savedForm) {
  const loadedForm = JSON.parse(savedForm);
  initialEmailValue = loadedForm.email;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);

  loginForm = new FormGroup({
    email: new FormControl(initialEmailValue, {
      validators: [Validators.required, Validators.email],
      asyncValidators: [emailIsUnique],
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6), mustContainsQuestionMark],
    }),
  });

  get emailIsInvalid() {
    return (
      this.loginForm.controls.email.touched &&
      this.loginForm.controls.email.dirty &&
      this.loginForm.controls.email.invalid
    );
  }

  get passwordIsInvalid() {
    return (
      this.loginForm.controls.password.touched &&
      this.loginForm.controls.password.dirty &&
      this.loginForm.controls.password.invalid
    );
  }

  ngOnInit(): void {
    //Standard approach
    // const savedForm = window.localStorage.getItem('saved-login-form');
    // if(savedForm) {
    //   const loadedForm = JSON.parse(savedForm);
    //   this.loginForm.patchValue({
    //     email: loadedForm.email,
    //   });
    // }

    const subscription = this.loginForm.valueChanges.pipe(debounceTime(500)).subscribe({
      next: (value) => {
        window.localStorage.setItem(
          'saved-login-form',
          JSON.stringify({ email: value.email})
        );
      },
    });

    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }

  onSubmit() {
    //To add more control
    //this.loginForm.controls.email.addValidators();

    console.log(this.loginForm);

    const enteredEmail = this.loginForm.value.email;
    const enteredPassword = this.loginForm.value.password;

    console.log(enteredEmail, enteredPassword);
  }
}
