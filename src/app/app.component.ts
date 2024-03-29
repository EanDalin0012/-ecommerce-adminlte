import {Component} from '@angular/core';
import {Utils} from './m-shares/utils/utils.static';
import {LANGUAGE, LOCAL_STORAGE} from './m-shares/constants/common.const';
import {TranslateService} from '@ngx-translate/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce-adminlte';
  constructor(
    private translate: TranslateService
  ) {
    this.setInitialAppLanguage();
  }


  // tslint:disable-next-line:typedef
  setInitialAppLanguage() {
    const i18n = Utils.getSecureStorage( LOCAL_STORAGE.I18N );
    if ( !i18n ) {
      Utils.setSecureStorage(LOCAL_STORAGE.I18N, LANGUAGE.I18N_EN.toString());
      this.translate.setDefaultLang( LANGUAGE.I18N_EN.toString() );
      this.translate.use( LANGUAGE.I18N_EN.toString() );
    } else {
      this.translate.setDefaultLang( 'en' );
      this.translate.use( i18n );
    }
  }
}
