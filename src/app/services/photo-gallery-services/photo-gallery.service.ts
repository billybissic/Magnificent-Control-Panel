import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../../environments/environment';

import { GalleryGroupType } from './../../controllers/gallery/gallery-group-type';

@Injectable()
export class PhotoGalleryService {

    constructor(private http:Http) {}

    mysqlUrl = environment.galleryService;

    getGalleryGroupTypes() {
        console.log("getGalleryGroupTypes");
        let url = this.mysqlUrl + "getGalleryGroupTypes";
        console.log(url);
        return this.http.get(url)
            .map(
                (response: any) => {
                    const data = response.json();
                    console.log(data);
                    return data;
                }
            );
    }

    getGalleryGroupTypeCount() {
        console.log("getGalleryGroupTypes");
        let url = this.mysqlUrl + "countGalleryGroupTypes";
        console.log(url);
        return this.http.get(url)
            .map(
                (response: any) => {
                    const data = response.json();
                    console.log(data);
                    return data;
                }
            );
    }

    createGalleryGroupType(galleryGroupType: GalleryGroupType): Observable<any> {
        let url = this.mysqlUrl + "addGalleryGroupType";
        console.log(galleryGroupType);
        return this.http.post(url, galleryGroupType)
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    }

    deleteGalleryGroupType(galleryGroupTypeId: number): Promise<void> {
        const url =  `${this.mysqlUrl}deleteGalleryGroupTypeById/${galleryGroupTypeId}`;

        console.log(url);
        return this.http.delete(url)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleErrorPromise)
    }

    getAllGalleryItems() {
        console.log("getAllGalleryItems");
        let url = this.mysqlUrl + "getAllGalleryItems";
        console.log(url);
        return this.http.get(url)
            .map(
                (response: any) => {
                    const data = response.json();
                    console.log(data);
                    return data;
                }
            );
    }

    deleteGalleryItems(galleryItemId: number): Promise<void> {
        const url = `${this.mysqlUrl}deleteGalleryItem/${galleryItemId}`;

        console.log(url);
        return this.http.delete(url)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleErrorPromise)
    }

    getAllGalleryStyles() {
        console.log("getAllGalleryStyles");
        let url = this.mysqlUrl + "getAllGalleryStyles";
        console.log(url);
        return this.http.get(url)
            .map(
                (response: any) => {
                    const data = response.json();
                    console.log(data);
                    return data;
                }
            );
    }

    deleteGalleryStyleType(galleryStyleTypeId: number): Promise<void> {
        const url = `${this.mysqlUrl}deleteGalleryStyleType/${galleryStyleTypeId}`;

        return this.http.delete(url)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleErrorPromise);
    }

    getAllGalleryObjectTypes() {
        console.log("getAllGalleryObjectTypes");
        let url = this.mysqlUrl + "getAllGalleryObjectTypes";
        console.log(url);
        return this.http.get(url)
            .map(
                (response: any) => {
                    const data = response.json();
                    console.log(data);
                    return data;
                }
            );
    }

    getAllGalleryOrderCategories() {
        console.log("getAllGalleryOrderCategories");
        let url = this.mysqlUrl + "getAllGalleryOrderCategories";
        console.log(url);
        return this.http.get(url)
            .map(
                (response: any) => {
                    const data = response.json();
                    console.log(data);
                    return data;
                }
            );
    }

    deleteGalleryOrderCategory(galleryOrderCategoryId: number): Promise<void> {
        const url = `${this.mysqlUrl}deleteGalleryOrderCategory/${galleryOrderCategoryId}`;

        console.log(url);
        return this.http.delete(url)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleErrorPromise)
    }

    getAllGalleryOrderTypes() {
        console.log("getAllGalleryOrderTypes");
        let url = this.mysqlUrl + "getAllGalleryOrderTypes";
        console.log(url);
        return this.http.get(url)
            .map(
                (response: any) => {
                    const data = response.json();
                    console.log(data);
                    return data;
                }
            );
    }

    deleteGalleryOrderType(galleryOrderTypeId: number): Promise<void> {
        const url = `${this.mysqlUrl}deleteGalleryOrderType/${galleryOrderTypeId}`;

        return this.http.delete(url)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleErrorPromise)
    }

    getAllGalleryOrderDirections() {
        console.log("getAllGalleryOrderDirections");
        let url = this.mysqlUrl + "getAllGalleryOrderDirections";
        console.log(url);
        return this.http.get(url)
            .map(
                (response: any) => {
                    const data = response.json();
                    console.log(data);
                    return data;
                }
            );
    }

    deleteGalleryOrderDirection(galleryOrderDirectionId: number): Promise<void> {
        const url = `${this.mysqlUrl}deleteGalleryOrderDirection/${galleryOrderDirectionId}`;

        return this.http.delete(url)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleErrorPromise)
    }

    extractData(res: Response) {
        let body = res.json();
        console.log(body);
        return body || {};
      }

      handleErrorObservable (error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
      }

      handleErrorPromise ( error: Response | any) {
        console.error('An error occured', error);
        return Promise.reject(error.message || error)
      }

}
