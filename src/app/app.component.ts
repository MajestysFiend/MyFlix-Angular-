// src/app/app.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myFlix-Angular-client';

  constructor(
    public snackBar: MatSnackBar,
    private router: Router,
  ) { }

  openProfile(): void {
    this.router.navigate(['profile']);
  }


}