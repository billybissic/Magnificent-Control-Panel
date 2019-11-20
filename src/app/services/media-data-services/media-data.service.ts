import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../../environments/environment';

//import { CaptionType } from '../../../controllers/media-data/caption/caption-type';
import { Injectable } from '@angular/core';

@Injectable()
export class MediaDataService {

    constructor(private http: Http) {}

    mysqlUrl = environment.mediaDataService;

    getAllCaptionTypes() {
        const url = this.mysqlUrl + 'getAllCaptionTypes';
        return this.http.get(url)
            .map(
                (response: Response ) => {
                    const data = response.json();
                    console.log(data);
                    return data;
                }
            );
    }

    getCaptionTypeByName(captionTypeName: string) {
        const url = this.mysqlUrl + 'getCaptionTypeByName?captionTypeName=' + captionTypeName;
        return this.http.get(url)
            .map(
                (response: Response ) => {
                    const data = response.json();
                    console.log(data);
                    return data;
                }
            );
    }

    getAllMimeTypeGroups() {
        const url = this.mysqlUrl + 'getAllMimeTypeGroups';
        return this.http.get(url)
            .map(
                (response: Response) => {
                    const data = response.json();
                    console.log(data);
                    return data;
                }
            );
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
       console.error(error.message || error);
       return Promise.reject(error.message || error)
    }

}
