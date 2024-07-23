import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	loginForm!: FormGroup;

	constructor(private fb: FormBuilder) { }

	ngOnInit() {
		this.loginForm = this.fb.group({
			email: ['', [Validators.required, Validators.email]],
			password: ['', [Validators.required, Validators.minLength(6)]]
		});
	}

	onSubmit() {
		if (this.loginForm.valid) {
			console.log('Form submitted:', this.loginForm.value);
		}
	}
}