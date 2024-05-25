import { Component, inject } from '@angular/core';
import { UsersService } from '../../../../services/users/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  usersService = inject(UsersService);
}
