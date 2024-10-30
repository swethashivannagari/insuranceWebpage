import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent {
blogs=[
  {
    image:'../../assets/carinsurance.jpeg',
    title:'What Is Personal Liability Umberella Coverage',
    subtitle:'BY ADMIN | INSURANCE',
    date:'14 AUG 2021'
  },
  {
    image:'../../assets/children.jpeg',
    title:'Insurance Covers Risk of Fire Abserce of Fire insurance',
    subtitle:'BY ADMIN | INSURANCE',
    date:'14 AUG 2021'
  },
  {
    image:'../../assets/grandparents.jpeg',
    title:'Ambulance Cover Of Fire On Insurance Serving',
    subtitle:'BY ADMIN | INSURANCE',
    date:'14 AUG 2021'
  }
]
}
