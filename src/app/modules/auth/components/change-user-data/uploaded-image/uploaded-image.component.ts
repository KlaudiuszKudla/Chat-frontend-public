import { Component, Input } from '@angular/core';
import { Image } from '../../../../core/models/image.model';

@Component({
  selector: 'app-uploaded-image',
  templateUrl: './uploaded-image.component.html',
  styleUrls: ['./uploaded-image.component.scss'],
})
export class UploadedImageComponent {
  @Input() imageUrl?: Image;
}
