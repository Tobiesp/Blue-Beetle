import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { Page404Component } from './page-404/page-404.component';
import { ForgotPasswordPageComponent } from './forgot-password-page/forgot-password-page.component';
import { StudentPageComponent } from './student-page/student-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { CheckinPageComponent } from './checkin-page/checkin-page.component';

export const routes: Routes = [
    { path: "home", component: HomePageComponent },
    { path: "student", component: StudentPageComponent },
    { path: "user", component: UserPageComponent },
    { path: "profile", component: ProfilePageComponent },
    { path: "login", component: LoginPageComponent },
    { path: "checkin", component: CheckinPageComponent },
    { path: "forgot-password", component: ForgotPasswordPageComponent },
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: Page404Component }
];
