import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { GalleryOrderCategory } from '../../../controllers/gallery/gallery-order-category';
import { environment } from '../../../../environments/environment';

@Injectable()
export class GalleryOrderCategoryService {

    constructor(private http: Http ) {}

    serverUrl = environment.galleryService;

    getAllGalleryOrderCategories() {
        const url = this.serverUrl + 'getAllGalleryOrderCategories';
        return this.http.get(url)
            .map(
                (response: Response) => {
                    const data = response.json();
                    console.log(data);
                    return data;
                }
            );
    }

    addGalleryOrderCategory(galleryOrderCategory: GalleryOrderCategory): Observable<any>{
        const url = this.serverUrl + 'addGalleryOrderCategory';
        console.log(galleryOrderCategory);
        return this.http.post(url, galleryOrderCategory)
        .map(this.extractData)
        .catch(this.handleErrorObservable);
    }

    deleteGalleryOrderCategory(galleryOrderCategory: GalleryOrderCategory): Observable<any>{
        const url = this.serverUrl + 'deleteGalleryOrderCategory';
        console.log(galleryOrderCategory);
        return this.http.delete(url + galleryOrderCategory) // might not work looking for solution if it doesnt
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
