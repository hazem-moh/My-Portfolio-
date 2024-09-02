import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InfoComponent } from '../Components/info/info.component';
import { SkillsComponent } from '../Components/skills/skills.component';
import { AboutComponent } from '../Components/about/about.component';
import { FooterComponent } from '../Components/footer/footer.component';
import { ProjectsIFinshiedComponent } from '../Components/projects-ifinshied/projects-ifinshied.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InfoComponent,AboutComponent,SkillsComponent,ProjectsIFinshiedComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyPortfolio';
}
