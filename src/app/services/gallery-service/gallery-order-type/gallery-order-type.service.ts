import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../../../environments/environment';

import { GalleryOrderType } from '../../../controllers/gallery/gallery-order-type';

@Injectable()
export class GalleryOrderTypeService {

    constructor(private http:Http) {}

    serverUrl = environment.galleryService;
    getAllGalleryOderTypes() {
        let url = this.serverUrl = "getAllGalleryOrderTypes";
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
