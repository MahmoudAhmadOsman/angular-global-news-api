import { ContactComponent } from './components/contact/contact.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NewsDetailsComponent } from './components/news-details/news-details.component';
import { UsersComponent } from './components/users/users.component';
import { PodcastsComponent } from './components/podcasts/podcasts.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path:"news-details/:id", component: NewsDetailsComponent},
  { path: "about", component: AboutComponent },
  {
    path: "users", children: [
      { path: '', component: UsersComponent },
      { path: "user-details/:id", component: UserDetailsComponent },
    ]
  },
    {
    path:"podcasts", component: PodcastsComponent
  },
  { path:"contact", component: ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
