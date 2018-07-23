import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  public form: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private auth: AuthService) {}

  email: string;

  ngOnInit() {
    this.form = this.fb.group ( {
      email: [ null, Validators.compose( [ Validators.required, CustomValidators.email ] ) ]
    } );
  }


  resetPassword() {
    this.email = (document.getElementById("email") as HTMLInputElement).value; 
    this.auth.resetPassword(this.email)
  }

}
