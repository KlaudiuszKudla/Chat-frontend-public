import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AccountActivationComponent } from './components/account-activation/account-activation.component';
import { PasswordRecoveryComponent } from './components/password-recovery/password-recovery.component';
import { PasswordRecoveryFormComponent } from './components/password-recovery-form/password-recovery-form.component';
import { UnauthGuard } from './guards/unauth.guard';
import { ChangeUserDataComponent } from './components/change-user-data/change-user-data.component';

const routes: Routes = [
  { path: 'logowanie', component: LoginComponent, canActivate: [UnauthGuard] },
  {
    path: 'rejestracja',
    component: RegisterComponent,
    canActivate: [UnauthGuard],
  },
  { path: 'aktywuj/:uid', component: AccountActivationComponent },
  { path: 'odzyskaj-haslo', component: PasswordRecoveryComponent },
  { path: 'odzyskaj-haslo/:uid', component: PasswordRecoveryFormComponent },
  { path: 'profil', component: ChangeUserDataComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
