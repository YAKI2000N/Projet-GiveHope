import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import{MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Views/home/home.component';
import { MatIconModule } from '@angular/material/icon';
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
import {ContactUsComponent} from './Views/contact-us/contact-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import { AddMedicamentComponent } from './Views/product/medicament/add-medicament/add-medicament.component';
import { MedicamentDetailComponent } from './Views/product/medicament/medicament-detail/medicament-detail.component';
import { MedicamentListComponent } from './Views/product/medicament/medicament-list/medicament-list.component' ;
import { ToastrModule } from 'ngx-toastr';
import { AuthGuard } from './auth.guard';
import { ProfileComponent } from './Views/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    HowItWorksComponent,
    LoginComponent,
    Sign_upComponent,
    PostAnnouncementComponent,
    PostRequestComponent,
    ViewRequestComponent,
    ProductComponent,
    MedicamentComponent,
    MedicalSuppliesComponent,
    AddMedicamentComponent,
    MedicamentDetailComponent,
    MedicamentListComponent,
    ProfileComponent,
    
    
  ],


  
  imports: [

    ReactiveFormsModule,
     BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule ,
    MatButtonModule,
    MatTableModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    
    

    


   
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
