import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EventsComponent } from './events/events.component';
import { GivingComponent } from './giving/giving.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {path: "header", component: HeaderComponent},
  {path: "home", component: HomeComponent},
  {path: "giving", component: GivingComponent},
  {path: "events", component: EventsComponent},
  {path: "contact", component: ContactUsComponent},
  {path: "about", component: AboutUsComponent},
  {path: "services", component: ServicesComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
