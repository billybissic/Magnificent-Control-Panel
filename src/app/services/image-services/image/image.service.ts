import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../../../environments/environment';

import { Image } from './image';

@Injectable()
export class ImageService {
    constructor(private http:Http) {}

    serverUrl = environment.imageService;

    getImageCount() {
        const url = this.serverUrl + 'getImageCount';
        return this.http.get(url)
            .map(
                (response: Response) => {
                    const data = response.json();
                    console.log(data);
                    return data;
                }
            );
    }
}
