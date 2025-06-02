import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectCommonModule } from '../../project-common-module/project-common.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NAV_ITEMS } from '../../navigation/navigation';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [ProjectCommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  navItems = NAV_ITEMS;

}
