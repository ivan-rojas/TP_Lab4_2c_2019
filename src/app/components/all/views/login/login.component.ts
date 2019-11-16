import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AuthService } from 'src/app/services/authentication/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	public loginForm: FormGroup;

	constructor(private authService: AuthService) {  }

	ngOnInit() {
		this.loginForm = new FormGroup({
			'email': new FormControl(null, [Validators.required]),
			'password': new FormControl(null, [Validators.required])
		});
	}

	onSubmit() {
		this.authService.LoginWithEmail(this.loginForm.get('email').value, this.loginForm.get('password').value);
	}

}
