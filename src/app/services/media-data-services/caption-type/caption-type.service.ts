import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
//import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { CaptionType } from '../../../controllers/media-data/caption/caption-type';
import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';

@Injectable()
export class CaptionTypeService {

    constructor(private http: Http) {}

    serverUrl = environment.mediaDataService;

    getAllCaptionTypes() {
        const url = this.serverUrl + 'getAllCaptionTypes';
        return this.http.get(url)
            .map(
                (response: Response ) => {
                    const data = response.json();
                    console.log(data);
                    return data;
                }
            )};

    getCaptionTypeByName(captionTypeName: string) {
        const url = this.serverUrl + 'getCaptionTypeByName?captionTypeName=' + captionTypeName;
        return this.http.get(url)
            .map(
                (response: Response ) => {
                    const data = response.json();
                    console.log(data);
                    return data;
                }
            )}
}
