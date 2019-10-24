import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { User, Role } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.registerForm = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'lastname': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required]),
      'repPassword': new FormControl(null, [Validators.required])
    });
  }

  onSubmit()
  {
    let user: User = User.CreateUserWithParams(
      this.registerForm.get('name').value,
      this.registerForm.get('lastname').value,
      this.registerForm.get('email').value,
      this.registerForm.get('password').value,
      Role.socio
      );
    
    this.authService.RegisterWithEmail(user);
		this.router.navigate(['app/login']);
  }

}
