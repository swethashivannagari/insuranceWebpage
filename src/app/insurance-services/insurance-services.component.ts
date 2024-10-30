import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-insurance-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './insurance-services.component.html',
  styleUrl: './insurance-services.component.scss'
})
export class InsuranceServicesComponent {

  cards=[
    {
      title:'Business Insurance',
      subtitle:'INSURANCE . VEHICLE',
      imgSrc:'../../assets/insuranceservice1.jpeg'
    },
    {
      title:'Vehicle Insurance',
      subtitle:'INSURANCE . VEHICLE',
      imgSrc:'../../assets/insuranceService2.jpeg'
    },
    {
      title:'Car Insurance',
      subtitle:'INSURANCE . VEHICLE',
      imgSrc:'../../assets/insuranceservice3.jpeg'
    },
  ];
}
