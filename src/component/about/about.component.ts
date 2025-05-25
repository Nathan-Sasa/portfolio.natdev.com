import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-about',
  imports: [RouterModule, NgFor],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  public aboutsMe: any = [
    {
      icon : 'ri-account-circle-fill',
      title: 'Qui suis-je ?',
      description: 'Je m’appelle Nathan, développeur web passionné par la programmation. '
    },
    {
      icon : 'ri-git-branch-line',
      title: 'Parcours',
      description: 'Autodidacte et curieux, j’aime concevoir des interfaces claires, fonctionnelles et élégantes, avec une attention particulière à l’expérience utilisateur.'
    },
    {
      icon : 'ri-emotion-happy-line',
      title: 'Motivation',
      description: 'passionné par la création d’applications web dynamiques et réactives. J’aime concevoir des interfaces claires, fonctionnelles et élégantes, avec une attention particulière à l’expérience utilisateur.'
    },
    {
      icon : 'ri-tools-fill',
      title: 'Compétences',
      description: 'Je maîtrise les technologies web modernes telles que HTML, CSS, JavaScript, Angular et Node.js. J’ai également de l’expérience avec des outils de gestion de version comme Git.'
    },
    {
      icon : 'ri-user-search-line',
      title: 'recherches',
      description: 'I am a web developer with a passion for creating dynamic and responsive web applications.'
    },
    {
      icon : 'ri-account-circle-fill',
      title: 'About Me',
      description: 'I am a web developer with a passion for creating dynamic and responsive web applications.'
    }
  ]
}
