import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavigationEnd, Router, RouterLink, RouterModule } from '@angular/router';
import { LoginComponent } from '../../auth/login/login.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() navitems: any[] = [];
  activePath: string = '';
  dialogRef: any;

  constructor(private router: Router, private _matDialog: MatDialog,) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.activePath = event.urlAfterRedirects;
      }
    });
  }

  log(item: any) {
    this.activePath = item.url;
    this.router.navigate([item.url]);

  }

  openLogin() {
    this.dialogRef = this._matDialog.open(LoginComponent, {
      disableClose: true,
      width: '30%',
      data: {
        action: 'login',
      },
    });

    this.dialogRef.afterClosed().subscribe((response: any) => {
      if (!response) {
        return;
      }
    });
  }
}
