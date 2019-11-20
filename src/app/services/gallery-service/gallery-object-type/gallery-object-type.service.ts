import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../../../environments/environment';

import { GalleryObjectType } from '../../../controllers/gallery/gallery-object-type';

@Injectable()
export class GalleryObjectTypeService {

    constructor(private http:Http) {}

    serverUrl = environment.galleryService;

    getAllGalleryObjectTypes() {
        const url = this.serverUrl + 'getAllGalleryObjectTypes';
        return this.http.get(url)
            .map(
                (response: Response) => {
                    const data = response.json();
                    console.log(data);
                    return data;
                }
            );
    }

    addGalleryOrderCategory(galleryObjectType: GalleryObjectType): Observable<any>{
        const url = this.serverUrl + 'addGalleryObjectType';
        console.log(galleryObjectType);
        return this.http.post(url, galleryObjectType)
        .map(this.extractData)
        .catch(this.handleErrorObservable);
    }

    deleteGalleryOrderCategory(galleryObjectType: GalleryObjectType): Observable<any>{
        const url = this.serverUrl + 'deleteGalleryObjectType';
        const body = galleryObjectType;
        const options = new RequestOptions({
            body: body
        })
        console.log(body);
        return this.http.delete(url, options) // might not work looking for solution if it doesnt
        .map(this.extractData)
        .catch(this.handleErrorObservable);
    }

    extractData(res: Response) {
        const body = res.json();
        console.log(body);
        return body || {};
    }

    handleErrorObservable (error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
    }
}
