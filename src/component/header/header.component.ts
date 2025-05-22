import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  appName:string = 'Portfolio ' 
  dev = {
    name : 'Nathan Sasa',
    work : 'Web Developper',
    profile: ''
  }
}
