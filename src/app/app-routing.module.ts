import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projets-component/projects.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { ProfileComponent } from './profile-component/profile.component';


const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
  },
  {
    path: 'Projects',
    component: ProjectsComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
