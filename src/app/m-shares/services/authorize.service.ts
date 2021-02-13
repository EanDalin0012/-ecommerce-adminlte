import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {PopupService} from './popup.service';
import {TranslateService} from '@ngx-translate/core';
import {Router} from '@angular/router';
import {CryptographyService} from './cryptography.service';
import {environment} from '../../../environments/environment';
import {BasicAuthorizeModel} from '../models/model/basic-authorize';
import {AuthorizationModel} from '../models/model/authorization';
import {LOCAL_STORAGE} from '../constants/common.const';
import {Utils} from '../utils/utils.static';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {
  url: string;

  constructor(
    private httpClient: HttpClient,
    private modalService: PopupService,
    private translate: TranslateService,
    private router: Router,
    private cryptoService: CryptographyService
  ) {
    this.url = environment.bizMOBServer;
  }

  public login(auth: AuthorizationModel, basicAuth?: BasicAuthorizeModel) {
    this.accessTokenRequest(auth, basicAuth).then(response => {

      const authorization = JSON.parse(response);
      const rawData = authorization.body;
      const decryptData = JSON.parse(this.cryptoService.decrypt(String(rawData)));

      if (decryptData.access_token) {
        Utils.setSecureStorage(LOCAL_STORAGE.LAST_EVENT_TIME, String(new Date().getTime()));
        Utils.setSecureStorage(LOCAL_STORAGE.Authorization, decryptData);
        this.loadUserByUserName(auth.user_name).then(userResponse => {

          if (userResponse) {
            Utils.setSecureStorage(LOCAL_STORAGE.USER_INFO, userResponse.body);
            this.router.navigate(['/main/home']);
            console.log(userResponse);
          }
        });
      }

    });
  }

  private accessTokenRequest(auth: AuthorizationModel, basicAuth?: BasicAuthorizeModel): Promise<any> {
    return new Promise(resolve => {
      $('div.loading').removeClass('none');
      if (!auth.user_name || auth.user_name === null) {
        this.modalService.alert({
          content: this.translate.instant('COMMON.MESSAGE.InValid_User_Name'),
          btnText: this.translate.instant('COMMON.BUTTON.CONFIRME'),
          callback: (res) => {},
        });
        return;
      }

      let credentail: BasicAuthorizeModel;

      if (!basicAuth) {
        credentail = {
          userName: 'spring-security-oauth2-read-write-client',
          password: 'spring-security-oauth2-read-write-client-password1234',
        };
      } else {
        credentail = basicAuth;
      }

      const api = '/oauth/token';
      const uri = this.url + api;
      const btoa =
        'Basic ' +
        window.btoa(credentail.userName + ':' + credentail.password);

      const httpOptionsObj = {
        Authorization: btoa,
      };

      const formData = new FormData();
      formData.append('client_id', 'spring-security-oauth2-read-write-client');
      formData.append('grant_type', 'password');
      formData.append('username', auth.user_name);
      formData.append('password', auth.password);

      this.httpClient.post(uri, formData, {
          headers: new HttpHeaders(httpOptionsObj),
        }).subscribe((_auth) => {
          $('div.loading').addClass('none');
          resolve(_auth);
        });
    });
  }
  private loadUserByUserName(userName: string): Promise<any> {
    return new Promise((resolve) => {
      $('div.loading').removeClass('none');

      const lang = Utils.getSecureStorage(localStorage.I18N);
      const api = '/api/user/v1/load_user';
      const uri = this.url + api + '?userName=' + userName + '&lang=' + lang;
      const authorization = Utils.getSecureStorage(LOCAL_STORAGE.Authorization);
      const access_token = authorization.access_token;

      const headers = {
        Authorization: 'Bearer ' + access_token,
      };

      this.httpClient.get(uri, { headers }).subscribe(rest => {
        $('body').addClass('loaded');
        $('div.loading').addClass('none');
        const bodyData = rest as any;

        const responseData = JSON.parse(bodyData);
        const rawData = responseData.body;
        const decryptData = JSON.parse(this.cryptoService.decrypt(String(rawData)));

        resolve(decryptData);
      });
    });
  }

  private message(message: string) {
    this.modalService.alert({
      // tslint:disable-next-line:max-line-length
      content:  '<h2>' + message + '</h2>',
      modalClass: ['pop_confirm'],
      btnText: 'Confirm',
      callback: (res) => {
        return false;
      }
    });
  }

}
