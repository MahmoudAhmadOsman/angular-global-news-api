import { ProductDashboardComponent } from './product-dashboard/product-dashboard/product-dashboard.component';
 
 
 import { GalmudugComponent } from './components/galmudug/galmudug.component';
import { ContactComponent } from './components/contact/contact.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NewsDetailsComponent } from './components/news-details/news-details.component';
import { UsersComponent } from './components/users/users.component';
import { PodcastsComponent } from './components/podcasts/podcasts.component';
import { StatesComponent } from './components/states/states.component';
import { HirshabelleComponent } from './components/hirshabelle/hirshabelle.component';
import { KoonfurGalbeedComponent } from './components/koonfur-galbeed/koonfur-galbeed.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { JubalandComponent } from './components/jubaland/jubaland.component';
import { SomalilandComponent } from './components/somaliland/somaliland.component';
import { PutlandComponent } from './components/putland/putland.component';
 
 

const routes: Routes = [
  { path: '', component: HomeComponent }, //Default route
  { path:"news-details/:id", component: NewsDetailsComponent},
  { path: "about", component: AboutComponent },
  { path: "products", component: ProductDashboardComponent },
  {
    path: "users", children: [
      { path: '', component: UsersComponent },
      { path: "user-details/:id/:name", component: UserDetailsComponent },
    ]
  },
    {
    path:"podcasts", component: PodcastsComponent
  },
  {
    path: "states", component: StatesComponent,
    children: [

      { path: "hirshabelle", component: HirshabelleComponent },
      { path: "koonfur-galbeed", component: KoonfurGalbeedComponent },
      {path: "jubaland", component: JubalandComponent},
      { path: "galmudug", component: GalmudugComponent },
      {path: "putland", component: PutlandComponent},
    
   
      { path: "somaliland", component: SomalilandComponent },
      
    ]
  },
 
  {
    path: "blogs", children: [
      { path: "", component: BlogComponent },
      { path: "blog-details/:id/:name", component: BlogDetailsComponent },
  ]
},
 
 


  { path: "contact", component: ContactComponent },
 
  { path:"**", redirectTo:""} //Invalid Route

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
