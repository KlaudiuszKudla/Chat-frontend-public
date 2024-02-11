import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Image, PostImageResponse } from '../models/image.model';
import { getXHRResponse } from 'rxjs/internal/ajax/getXHRResponse';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  apiUrl = `${environment.apiUrl}/image`;

  constructor(private http: HttpClient) {}

  addImage(formData: FormData): Observable<Image> {
    return this.http
      .post<PostImageResponse>(`${this.apiUrl}`, formData, {
        withCredentials: true,
      })
      .pipe(
        map((resp) => {
          return { url: `${this.apiUrl}?uuid=${resp.uuid}` };
        }),
      );
  }
}
