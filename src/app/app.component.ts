import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { ServicesComponent } from './services/services.component';
import { AboutIncepComponent } from './about-incep/about-incep.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { FooterComponent } from './footer/footer.component';
import { InsuranceServicesComponent } from './insurance-services/insurance-services.component';
import { ChooseUsComponent } from './choose-us/choose-us.component';
import { TeamReviewComponent } from './team-review/team-review.component';
import { BlogsComponent } from './blogs/blogs.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,HeroSectionComponent,ServicesComponent,AboutIncepComponent,CallToActionComponent,FooterComponent,InsuranceServicesComponent,ChooseUsComponent,TeamReviewComponent,BlogsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'insurance';
  
}
