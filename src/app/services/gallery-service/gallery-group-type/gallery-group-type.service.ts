import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { environment } from '../../../../environments/environment';
import { GalleryGroupType } from '../../../controllers/gallery/gallery-group-type';

@Injectable()
export class GalleryGroupTypeService {

    constructor(private http:Http) {}

    serverUrl = environment.galleryService;

    getAllGalleryGroupTypes() {
        const url = this.serverUrl + 'getGalleryGroupTypes';
        return this.http.get(url)
            .map(
                (response: Response) => {
                    const data = response.json();
                    console.log(data);
                    return data;
                }
            );
    }

    addGalleryGroupType(galleryGroupType: GalleryGroupType): Observable<any>{
        const url = this.serverUrl + 'addGalleryObjectType';
        console.log(galleryGroupType);
        return this.http.post(url, galleryGroupType)
        .map(this.extractData)
        .catch(this.handleErrorObservable);
    }

    deleteGalleryGroupType(galleryGroupType: GalleryGroupType): Observable<any>{
        const url = this.serverUrl + 'deleteGalleryObjectType';
        console.log(galleryGroupType);
        return this.http.delete(url + galleryGroupType) // might not work looking for solution if it doesnt
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
