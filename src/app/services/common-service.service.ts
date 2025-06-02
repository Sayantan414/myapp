import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { map, catchError, } from "rxjs/operators";
import { BehaviorSubject, Observable, Subject, throwError } from "rxjs";
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  //private apiUrl = 'http://localhost:4016/api';//Local API
  private apiUrl = 'http://59.97.132.209:4060/api';//Dev API
  //private apiUrl = 'https://erp.sisx.in/sisxerpapi/api';//Prod API
  private authorization = 'Bearer c2lzeFVQVkF1dGg6aUk1YzAkUzE5TA==';
  //For Sign up Link
  private appUrl = "https://erp.sisx.in/#/";
  private appUrlSms = 'https%3A%2F%2Fweb.educampuz.com%2F%23%2F';
  public otype = 'Company';

  private jsonUrl = 'assets/jsons';
  public ipAddress = '';
  loading = new BehaviorSubject<boolean>(true);
  currentUser = new Subject<any>();
  // zeroPad: any;

  constructor(
    @Inject(SESSION_STORAGE) private storage: StorageService,
    public http: HttpClient,
    public snakBar: MatSnackBar,
  ) { }

  private getHeaders() {
    return new HttpHeaders({
      Authorization: this.authorization,
      'Content-Type': 'application/json',
    });
  }

  /**
   * ***********************************************************************************
   * API URL Functions
   * ***********************************************************************************
   */
  getBaseUrl(): string {
    return this.apiUrl;
  }

  getAuthorization() {
    return this.authorization;
  }

  getAppUrl(): string {
    return this.appUrl;
  }

  getAppUrlSms(): string {
    return this.appUrlSms;
  }

  /**
     * ***********************************************************************************
     * Local Functions
     * ***********************************************************************************
     */

  findItem(array: any, key: string, value: string) {
    for (let index = 0; index < array.length; index++) {
      if (array[index][key] == value) {
        return index;
      }
    }
    return -1;
  }

  showSnakBarMessage(message: string, type: string, duration: number, action?: string) {
    this.snakBar.open(message, action, {
      duration: duration,
      panelClass: type
    });
  }


  /**
   * ***********************************************************************************
   * Local/Session Storage Functions
   * ***********************************************************************************
   */

  setItem(key: string, value: any) {
    this.storage.set(key, value);
  }

  getItem(key: string): any {
    let value = this.storage.get(key) || undefined;
    return value;
  }

  removeItem(key: string) {
    this.storage.remove(key);
  }

  removeAll() {
    this.storage.clear();
  }

  /**
* ***********************************************************************************
* Create User API call
* ***********************************************************************************
*/



  /**
   * ***********************************************************************************
   * JSON Service Functions
   * ***********************************************************************************
   */

  getDefaultRole() { //alert('1');
    return this.http.get(this.jsonUrl + '/defaultroles.json')
      .pipe(map((response: any) => response))
  }

  getDefaultProduct() { //alert('1');
    return this.http.get(this.jsonUrl + '/defaultproducts.json')
      .pipe(map((response: any) => response))
  }

  getPrivileges() {
    return this.http.get(this.jsonUrl + '/privileges.json')
      .pipe(map((response: any) => response))
  }

  getCountries(): any {
    return this.http.get(this.jsonUrl + '/country.json')
      .pipe(map((response: any) => response))
  }

  getStates() {
    return this.http.get(this.jsonUrl + '/country-state-city/state.json')
      .pipe(map((response: any) => response))
  }

  getCities() {
    return this.http.get(this.jsonUrl + '/country-state-city/city.json')
      .pipe(map((response: any) => response))
  }

  getFeatures() {
    return this.http.get(this.jsonUrl + '/features.json')
      .pipe(map((response: any) => response))
  }

  createDateAsUTC(d: string | number | Date) {
    let date = new Date(d);
    return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()));
  }

  zeroPad(num: any, places: any) {
    var zero = places - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join("0") + num;
  }


  getRandom(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }


  //   zeroPad(num: string | number, places: number) {
  //     var zero = places - num.toString().length + 1;
  //     return Array(+(zero > 0 && zero)).join("0") + num;
  // }

}
