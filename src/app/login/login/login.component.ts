import {Component, OnInit} from '@angular/core';
import {AuthorizeService} from '../../m-shares/services/authorize.service';
import {Router} from '@angular/router';
import {MessageService} from 'primeng/api';
import {Utils} from '../../m-shares/utils/utils.static';
import {AuthorizationModel} from '../../m-shares/models/model/authorization';
declare var $;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;
  rememberMe: boolean;
  authenticationObj: AuthorizationModel;
  constructor(
    private authenticationService: AuthorizeService
  ) {
  }

  ngOnInit(): void {
    this.password = 'admin1234';
    $('body').addClass('hold-transition login-page');
    $(() => {
      $('input').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%' /* optional */
      });
    });
    this.rememberMe = Utils.getSecureStorage('remember_me');
    if(this.rememberMe === true) {
      this.userName = Utils.getSecureStorage('user_id');
    }
    console.log('remember_me', this.rememberMe);
  }

  ngOnDestroy(): void {
    $('body').removeClass('hold-transition login-page');
  }

  Login() {
    if(this.rememberMe) {
      Utils.setSecureStorage('user_id', this.userName)
    }

    this.authenticationObj.user_name = this.userName;
    this.authenticationObj.password  = this.password;
    this.authenticationService.login(this.authenticationObj);
  }

  enterLoginHandler(event: any) {
    if (event.keyCode === 13 && this.userName !== '' && this.password !== '') {
      this.Login();
    } else if (event.keyCode === 13 && this.userName !== '') {
      // @ts-ignore
      this.passwordElement.nativeElement.focus();
    }
  }

  tapfocus(event: any) {
    const element = event.srcElement.nextElementSibling;
    if (event.keyCode === 9) {
      element.focus();
    }
  }

  clickRememberMe() {
    if(this.userName !== '') {
      Utils.setSecureStorage('remember_me', this.rememberMe);
      Utils.setSecureStorage('user_id', this.userName)
    }
  }

  remember() {
    this.rememberMe = !this.rememberMe;
    Utils.setSecureStorage('remember_me', this.rememberMe);
    Utils.removeSecureStorage('user_id');
    if(this.rememberMe) {
      Utils.setSecureStorage('user_id', this.userName)
    }
  }

}
