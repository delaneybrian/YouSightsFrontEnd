/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Topic } from '../models/topic';
import { Video } from '../models/video';
@Injectable({
  providedIn: 'root',
})
class YouSightsService extends __BaseService {
  static readonly GetPath = '/api/YouSights';
  static readonly Get_1Path = '/api/YouSights/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
  GetResponse(): __Observable<__StrictHttpResponse<Array<Topic>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/YouSights`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Topic>>;
      })
    );
  }
  /**
   * @return Success
   */
  Get(): __Observable<Array<Topic>> {
    return this.GetResponse().pipe(
      __map(_r => _r.body as Array<Topic>)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  Get_1Response(id: number): __Observable<__StrictHttpResponse<Array<Video>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/YouSights/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Video>>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Success
   */
  Get_1(id: number): __Observable<Array<Video>> {
    return this.Get_1Response(id).pipe(
      __map(_r => _r.body as Array<Video>)
    );
  }
}

module YouSightsService {
}

export { YouSightsService }
