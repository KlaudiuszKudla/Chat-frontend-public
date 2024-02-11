import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './components/register/register.component';
import { AccountActivationComponent } from './components/account-activation/account-activation.component';
import { PasswordRecoveryComponent } from './components/password-recovery/password-recovery.component';
import { PasswordRecoveryFormComponent } from './components/password-recovery-form/password-recovery-form.component';
import { ChangeUserDataComponent } from './components/change-user-data/change-user-data.component';
import { UploadedImageComponent } from './components/change-user-data/uploaded-image/uploaded-image.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AccountActivationComponent,
    PasswordRecoveryComponent,
    PasswordRecoveryFormComponent,
    ChangeUserDataComponent,
    UploadedImageComponent,
    UploadedImageComponent,
  ],
  imports: [SharedModule, AuthRoutingModule],
})
export class AuthModule {}
