import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-team-review',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-review.component.html',
  styleUrl: './team-review.component.scss'
})
export class TeamReviewComponent {
teamMembers=[
  {
    name:'Mesiva Scott',
    role:'Marketing Ex.',
    image:'../../assets/teamMember4.jpeg',
    socials: ['../../assets/social/facebook.png',
       '../../assets/social/twitter.png', 
       '../../assets/social/instagram.png', '../../assets/social/linkedin.png']
    
  },
  {
    name: 'Jason Thomson',
    role: 'Marketing Ex.',
    image: '../../assets/TeamMember2.jpeg',
    socials: ['../../assets/social/facebook.png',
      '../../assets/social/twitter.png', 
      '../../assets/social/instagram.png', '../../assets/social/linkedin.png']
  },
  {
    name: 'Kohn Wright',
    role: 'Marketing Ex.',
    image: '../../assets/teamMember3.jpeg',
    socials: ['../../assets/social/facebook.png',
      '../../assets/social/twitter.png', 
      '../../assets/social/instagram.png', '../../assets/social/linkedin.png']
  },
  {
    name: 'Andrew Schimke',
    role: 'Marketing Ex.',
    image: '../../assets/teamMember1.jpeg',
    socials: ['../../assets/social/facebook.png',
      '../../assets/social/twitter.png', 
      '../../assets/social/instagram.png', '../../assets/social/linkedin.png']
  }
]
}
