import { Component, inject } from '@angular/core';
import { AuthService } from '../../../../services/users/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserModel } from '../../../../models/user.mode';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  AuthService = inject(AuthService);

  newUserFormGroup = new FormGroup({
    id: new FormControl(1, [Validators.required]),
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    website: new FormControl(''),
    company: new FormControl(''),
  });

  createNewUserHandler() {
    if (this.newUserFormGroup.valid) {
      this.AuthService.addUserHandler(
        this.newUserFormGroup.value as UserModel
      ).subscribe({
        next: (response) => {
          console.log('User created successfully', response);
        },
        error: (error) => {
          console.error('Error creating user', error);
        },
        complete: () => {
          console.log('User creation completed');
        },
      });
    }
  }
}
