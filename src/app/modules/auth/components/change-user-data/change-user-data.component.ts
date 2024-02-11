import { Component } from '@angular/core';
import { ImageService } from '../../../core/services/image.service';
import { Image } from '../../../core/models/image.model';
import { FormControl, FormGroup } from '@angular/forms';
import { ChangeUserDataForm } from '../../../core/models/forms.model';
import { FormService } from '../../../core/services/form.service';
import { ChangeUserData } from '../../../core/models/responseModel';
import { selectUserId } from '../../store/auth.selectors';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/app.reducer';
import { AuthService } from '../../../core/services/auth.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-change-user-data',
  templateUrl: './change-user-data.component.html',
  styleUrls: ['./change-user-data.component.scss'],
})
export class ChangeUserDataComponent {
  selectedFile: File | null = null;
  fileName = '';
  imageUrl: Image | null = null;
  errorImageUploadMsg: string | null = null;
  changeUserDataForm: FormGroup<ChangeUserDataForm> =
    this.formService.initChangeUserDataForm();
  constructor(
    private imageService: ImageService,
    private formService: FormService,
    private store: Store<AppState>,
    private authService: AuthService,
    private notifierService: NotifierService,
  ) {}
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
    if (this.selectedFile) {
      this.fileName = this.selectedFile.name;
    }
  }

  uploadFile() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('multipartFile', this.selectedFile);
      this.imageService.addImage(formData).subscribe({
        next: (response) => {
          this.imageUrl = response;
        },
        error: (err) => {
          this.errorImageUploadMsg = err;
        },
      });
    }
  }
  get controls() {
    return this.changeUserDataForm.controls;
  }

  getErrorMessage(control: FormControl) {
    return this.formService.getErrorMessage(control);
  }

  changeUserData() {
    console.log(this.changeUserDataForm.getRawValue());
    this.store.select(selectUserId).subscribe((userId) => {
      const userData: ChangeUserData = {
        id: userId ?? null,
        login: this.controls.login.value || null,
        password: this.controls.password.value || null,
        imageUrl: this.imageUrl?.url || null,
      };
      console.log(userData);
      this.authService.changeUserData(userData).subscribe((response) => {
        this.notifierService.notify('succes', response.message);
        console.log(response);
      });
    });
  }
}
