import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
   person = {
    name: 'Nathan Sasa',
    job : `Developer Web`,
    description: 'I am a developer web',
  }
  links ={
    github: '',
    linkedin: '',
    whatsapp: '',
    facebook: '',
  }
}
