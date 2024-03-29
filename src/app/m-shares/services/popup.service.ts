import { Injectable } from '@angular/core';
import { MSharesModule } from '../m-shares.module';
import { Store } from '../models/model/store-model';
import { DialogCloseResult, DialogRef, DialogService } from '@progress/kendo-angular-dialog';
import { ModalService } from '../component/modal.service';
import { TranslateService } from '@ngx-translate/core';
import { NotificationService } from '@progress/kendo-angular-notification';
import { ModalComponent } from '../component/modal/modal.component';
import { MODAL_STORE_KEY } from '../constants/common.const';
// import { AlertDialogComponent } from '../component/alert-dialog/alert-dialog.component';

@Injectable({
  providedIn: MSharesModule
})
export class PopupService {
  store = new Store();
  dialogRefList: DialogRef[] = [];
  i = 0;

  constructor(
    private dialogService: DialogService,
    private modalData: ModalService,
    private translate: TranslateService,
    private notificationService: NotificationService
  ) { }

  /**
   * modal
   * @param content (string)
   * @param btnText (string)
   * @param modalClass (array) Modal Component
   * @param height (number) Modal Kendo ui
   * @param width (number) Modal  Kendo ui
   * @param minWidth (number) Modal Kendo ui
   */
  // tslint:disable-next-line:typedef
   notice({ content = '', btnText = 'OK', modalClass = [], height = 0, width = 0, minWidth = 0 }) {
    let contentComponent: any;

    if (typeof content === 'string') {
      this.modalData.sendMessage(content.replace(/\n/gi, '<br/>'));
      contentComponent = ModalComponent;
    } else {
      contentComponent = content;
    }

    this.dialogService.open({
      content: ModalComponent,
      actions: [{
        text: btnText
      }],
      height,
      width,
      minWidth
    });

    /**
     * Modal
     */
    $('kendo-dialog').addClass(modalClass);
  }

  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  /**
   * modal
   * @param title (string) modal
   * @param content (string)
   * @param btnText (string)
   * @param modalClass (array) Modal Component
   * @param callback (function)
   * @param height (number) Modal
   * @param width (number) Modal
   * @param minWidth (number) Modal
   */
  // tslint:disable-next-line:typedef
  alert({ title = '', content, btnText = 'OK', modalClass = [], callback = (res: any) => {}, height = 0, width = 0, minWidth = 0 }) {
    let contentComponent: any;

    if (typeof content === 'string') {
      // Base Component
      this.modalData.sendMessage(content.replace(/\n/gi, '<br/>'));
      contentComponent = ModalComponent;
    } else {
      contentComponent = content;
    }

    const dialog: DialogRef = this.dialogService.open({
      title,
      content: contentComponent,
      actions: [{
        text: btnText
      }],
      height,
      width,
      minWidth
    });

    /**
     * Modal
     */
    $('kendo-dialog').addClass(modalClass);
    $('kendo-dialog').addClass('addAlert');
    $('.addAlert').eq(-1).addClass('addAlertCender');
    $('.addAlertCender').find('kendo-dialog-actions').addClass('alert-btn');
    dialog.result.subscribe((res) => {
      if (res instanceof DialogCloseResult) {
        callback(false);
      } else {
        callback(res);
      }
    });

  }

  // @ts-ignore
  // @ts-ignore
  /**
   * Confirm
   * @param title (string) modal
   * @param content (string)
   * @param lBtn (object)
   * @param lBtn.btnText (string)
   * @param lBtn.callback (function)
   * @param rBtn (object)
   * @param rBtn.btnText (string)
   * @param rBtn.callback (function)
   * @param modalClass (array) Modal Component
   * @param callback (function) modal이 close
   * @param height (number) Modal Kendo ui
   * @param width (number) Modal  Kendo ui
   * @param minWidth (number) Modal Kendo ui
   */
  confirm({
    title = '',
    content,
    lBtn = {},
    rBtn = {},
    modalClass = [],
    callback = (res: any) => {},
    height = 0,
    width = 0,
    minWidth = 0
  }) {
    const lBtnText = lBtn['btnText'] || 'No';
    const lBtnCallback = lBtn['callback'] || function() {};

    const rBtnText = rBtn['btnText'] || 'Yes';
    const rBtnCallback = rBtn['callback'] || function() {};

    let contentComponent: any;

    if (typeof content === 'string') {
      // Base Component
      this.modalData.sendMessage(content.replace(/\n/gi, '<br/>'));
      contentComponent = ModalComponent;
    } else {
      contentComponent = content;
    }

    const dialog: DialogRef = this.dialogService.open({
      title,
      content: contentComponent,
      actions: [{
        text: lBtnText
      }, {
        text: rBtnText
      }],
      height,
      width,
      minWidth
    });

    $('kendo-dialog').addClass(modalClass);

    dialog.result.subscribe((res) => {
      if (res instanceof DialogCloseResult) {
        callback(false);
      } else {
        switch (res.text) {
          case lBtnText:
            lBtnCallback(res);
            callback(res);
            break;

          case rBtnText:
            rBtnCallback(res);
            callback(res);
            break;
        }
      }
    });
  }

  /**
   * @param content (component) component
   * @param message (object)
   * @param opener (object)
   * @param callback (function) modal
   * @param callback (function)
   */
  open({ content, message = {}, opener = {}, modalClass = [], callback = (res: any) => {} }) {
    const dialog: DialogRef = this.dialogService.open({
      content
    });
    this.dialogRefList.push(dialog);
    this.store.set(MODAL_STORE_KEY.Modal_Store_Key, this.dialogRefList);
    this.i++;
    $('kendo-dialog').addClass(modalClass);
    $('body').addClass('overHidden');

    dialog.content.instance.modal = {
      message,
      callback,
      opener,
      close: (res: any) => {
        const modalStoreKey = this.store.get(MODAL_STORE_KEY.Modal_Store_Key);
        modalStoreKey.splice(this.i - 1);
        dialog.close(res);
        $('body').removeClass('overHidden');
      }
    };

    dialog.result.subscribe((res) => {
      if (res instanceof DialogCloseResult) {
        callback(false);
      } else {
        callback(res);
      }
    });
  }

  showNotificationService(content: string, duration?: number, cssClass?: string, closable?:boolean) {
    console.log('cssClass',cssClass);
    let css = cssClass;
    let close = closable;
    let time = 400;
    if(duration) {
      time = duration;
    }
    if(closable == undefined) {
      close = false;
    }
    if(cssClass === undefined) {
      css = '';
    }

    if(content) {
      this.notificationService.show({
        content: content,
        cssClass: css,
        animation: { type: 'slide', duration: time },
        position: { horizontal: 'center', vertical: 'bottom' },
        type: { style: 'success', icon: true },
        closable: close
      });
    }

  }

  closeAllDialog() {
    const modalStore = this.store.get(MODAL_STORE_KEY.Modal_Store_Key) as DialogRef[];
    if (modalStore) {
      if (modalStore.length > 0) {
        modalStore.forEach((element, index) => {
          modalStore[index].close(true);
        });
      }
    }
  }

  messageAlert(msg: string, title?: string): boolean {
    this.alert({
      title: title,
      content: msg,
      btnText: this.translate.instant('COMMON.BUTTON.CONFIRME'),
      modalClass: ['message-alert testing, open-alert'],
      callback: rest => {
      }
    });
    return false;
  }
}
