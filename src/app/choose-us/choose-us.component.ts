import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-choose-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './choose-us.component.html',
  styleUrl: './choose-us.component.scss'
})
export class ChooseUsComponent {
  features=[
    'Protective Protection',
    'Money Back Guarantee',
    'Homeowner Insurance',
    'Partnership System',
    'Consultations',
    'Safety Ensure'
  ]
}
