import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { CommonService } from "./common-service.service";
import { CommonModule } from "@angular/common";
import { ProjectCommonModule } from "../main/project-common-module/project-common.module";

@Injectable({
  providedIn: "root",
})
export class UtilityService {
  baseUrl = "";
  authorization = "";

  constructor(public http: HttpClient, public commonService: CommonService) {
    this.baseUrl = this.commonService.getBaseUrl();
    this.authorization = this.commonService.getAuthorization();
  }

  co_consumption() {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: this.authorization,
      }),
    };
    return this.http
      .get(this.baseUrl + "/utility/co_consumption", httpOptions)
      .pipe(retry(1), catchError(this.errorHandler));
  }
  co_consumption_pbs() {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: this.authorization,
      }),
    };
    return this.http
      .get(this.baseUrl + "/utility/co_consumption_pbs", httpOptions)
      .pipe(retry(1), catchError(this.errorHandler));
  }
  co_consumption_sp() {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: this.authorization,
      }),
    };
    return this.http
      .get(this.baseUrl + "/utility/co_consumption_sp", httpOptions)
      .pipe(retry(1), catchError(this.errorHandler));
  }
  co_consumption_bf() {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: this.authorization,
      }),
    };
    return this.http
      .get(this.baseUrl + "/utility/co_consumption_bf", httpOptions)
      .pipe(retry(1), catchError(this.errorHandler));
  }
  co_lastEighthours() {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: this.authorization,
      }),
    };
    return this.http
      .get(this.baseUrl + "/utility/co_lastEighthours", httpOptions)
      .pipe(retry(1), catchError(this.errorHandler));
  }
  co_trend_cob10() {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: this.authorization,
      }),
    };
    return this.http
      .get(this.baseUrl + "/utility/co_trend_cob10", httpOptions)
      .pipe(retry(1), catchError(this.errorHandler));
  }
  co_trend_pbs() {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: this.authorization,
      }),
    };
    return this.http
      .get(this.baseUrl + "/utility/co_trend_pbs", httpOptions)
      .pipe(retry(1), catchError(this.errorHandler));
  }
  co_trend_sp() {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: this.authorization,
      }),
    };
    return this.http
      .get(this.baseUrl + "/utility/co_trend_sp", httpOptions)
      .pipe(retry(1), catchError(this.errorHandler));
  }
  co_trend_bf() {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: this.authorization,
      }),
    };
    return this.http
      .get(this.baseUrl + "/utility/co_trend_bf", httpOptions)
      .pipe(retry(1), catchError(this.errorHandler));
  }
  errorHandler(error: any) {
    console.log(error);
    let message = (error['error']) ? ((error['error'].error) ? error['error'].error : error['message']) : error['message'];
    console.log(message);
    return throwError(message || 'Remote server unreachable. Please check your Internet connection.');
  }
}
