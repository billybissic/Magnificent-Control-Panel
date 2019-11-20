import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { MimeTypeGroup } from '../../../controllers/mime-type-group/mime-type-group';

@Injectable()
export class MimeTypeGroupService {

    constructor(private http:Http) {}

    //serverUrl = 'http://localhost:8080/mediadata-service/api/MediadataServices/';
    serverUrl = 'http://cs1.menageadultclub.com:8080/mediadata-service/api/MediadataServices/';

    getAllMimeTypeGroups() {
        const url = this.serverUrl + 'getAllMimeTypeGroups';
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
