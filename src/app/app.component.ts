import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { passwordStrengthValidator } from './strength.validator';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  passwordForm: FormGroup;
  password: FormControl;

  constructor(private formBuilder: FormBuilder) {
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      passwordStrengthValidator(),
    ]);

    this.passwordForm = this.formBuilder.group({
      password: this.password,
    });
  }
}
