import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { AboutComponent } from './component/about/about.component';
import { SkillsComponent } from './component/skills/skills.component';
import { CvComponent } from './component/cv/cv.component';
import { ContactMeComponent } from './component/contact-me/contact-me.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'curriculum', component: CvComponent},
  { path: 'contact', component: ContactMeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
