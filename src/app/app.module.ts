import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { ContactComponent } from './components/contact/contact.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutComponent } from './components/about/about.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { BodyComponent } from './components/body/body.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { EdicionComponent } from './components/edicion/edicion.component';
import { IngresarComponent } from './components/ingresar/ingresar.component';
import { CuerpoComponent } from './components/cuerpo/cuerpo.component';
import { FormInfoComponent } from './components/form-info/form-info.component';

const appRoutes : Routes = [
  {path: '', component: BodyComponent, pathMatch:"full"},
  {path: 'login', component: LoginComponent, pathMatch:"full"}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    ContactComponent,
    BannerComponent,
    AboutComponent,
    EducationComponent,
    SkillsComponent,
    BodyComponent,
    ProjectsComponent,
    FooterComponent,
    ButtonComponent,
    ExperienceComponent,
    LoginComponent,
    EdicionComponent,
    IngresarComponent,
    CuerpoComponent,
    FormInfoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    FormsModule,
    HttpClientModule
  ],
  exports: [
    RouterModule,
    FormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
