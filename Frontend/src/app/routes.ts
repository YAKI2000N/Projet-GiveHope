import { Routes } from '@angular/router';
import { HomeComponent } from './Views/home/home.component';
import { AboutUsComponent } from './Views/home/about-us/about-us.component';
import { HowItWorksComponent } from './Views/how-it-works/how-it-works.component';
import { LoginComponent } from './Views/login/login.component';
import { Sign_upComponent } from './Views/sign_up/sign_up.component';
import { PostAnnouncementComponent } from './Views/post-announcement/post-announcement.component';
import { PostRequestComponent } from './Views/post-request/post-request.component';
import { ViewRequestComponent } from './Views/view-request/view-request.component';
import { ProductComponent } from './Views/product/product.component';
import { MedicamentComponent } from './Views/product/medicament/medicament.component';
import { MedicalSuppliesComponent } from './Views/product/medical-supplies/medical-supplies.component';
import {ContactUsComponent} from './Views/contact-us/contact-us.component'
import { AddMedicamentComponent } from './Views/product/medicament/add-medicament/add-medicament.component';
import { MedicamentListComponent } from './Views/product/medicament/medicament-list/medicament-list.component';
import { MedicamentDetailComponent } from './Views/product/medicament/medicament-detail/medicament-detail.component';
import { AuthGuard } from './auth.guard';
import { ProfileComponent } from './Views/profile/profile.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about_Us', component: AboutUsComponent},
  { path: 'how_it_works', component: HowItWorksComponent},
  { path: 'login', component: LoginComponent},
  { path: 'sign_up', component: Sign_upComponent},
  { path: 'post_Announcement',canActivate : [AuthGuard],component: PostAnnouncementComponent},
  { path: 'post_Request',canActivate : [AuthGuard], component: PostRequestComponent},
  { path: 'view_Request',canActivate : [AuthGuard], component: ViewRequestComponent},
  { path: 'product', component: ProductComponent},
  { path: 'medicament', component: MedicamentComponent},
  { path: 'medical_supplies', component: MedicalSuppliesComponent},
  { path: 'Contact_us', component: ContactUsComponent},
  { path: '', redirectTo: 'home',pathMatch:'full'},
  {path: 'add-medicament',canActivate : [AuthGuard],component:AddMedicamentComponent},
  {path: 'medicament-list',canActivate : [AuthGuard],component:MedicamentListComponent},
  {path: 'edit-medicament/:id',canActivate : [AuthGuard],component:MedicamentDetailComponent},
  {path: 'profile', canActivate : [AuthGuard],component:ProfileComponent },


];  
