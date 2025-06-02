import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MaterialModule } from '../../../../Angular-material-Element/material.module';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../../../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MaterialModule, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  dialogRef: any;
  addForm: FormGroup;
  credentials = {
    userID: '',
    password: ''
  };

  constructor(
    private _matDialog: MatDialog,
    private auth: AuthService,
    private _formBuilder: FormBuilder,
    private matDialogRef: MatDialogRef<LoginComponent>,
    private _snackBar: MatSnackBar,
  ) {
    this.addForm = this.logincread();
  }

  logincread(): FormGroup {
    return this._formBuilder.group({
      userID: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  login() {
    if (this.credentials.userID == "admin" &&
      this.credentials.password == "admin") {

      this.auth.login();
      this.matDialogRef.close();
    } else {
      this._snackBar.open('Wrong Userid Password', '', { duration: 2000, panelClass: 'error' });
      this.auth.logout();
    }
  }


}
