import { Injectable } from '@angular/core';
import { Image } from './image';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

    images: Image[] = [];

    constructor(private http: HttpClient) { }

    public getImages(): Observable<Image[]> {
        return this.http.get<Image[]> (environment.apiUrl + "images").pipe();
    }

    public getImage(id: string): Observable<Image> {
        return this.http.get<Image> (environment.apiUrl + "images/" + id).pipe();
    }

    addImage(image: Image): Observable<Image> {
        return this.http.post<Image>(environment.apiUrl + "images", image).pipe();
    }

    deleteImage(imageId): Observable<string>  {
        return this.http.delete<string>(environment.apiUrl + "images/" + imageId);
    }
}
