import {Component, OnInit} from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { AllModulesService } from 'src/app/m-shares/all-modules.service';
import { MessageService } from '../../m-shares/services/message.service';
import {URLCODE} from '../../m-shares/constants/common.const';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  toggleCss = false;

  urlComplete = {
    mainUrl: '',
    subUrl: '',
    childUrl: '',
  };

  sidebarMenus = {
    default: true,
    chat: false,
    settings: false,
  };

  members = {
    active: 'Mike Litorus',
    total: [
      { name: 'John Doe', count: 3},
      { name: 'Richard Miles', count: 0},
      { name: 'John Smith', count: 7},
      { name: 'Mike Litorus', count: 9}
    ]
  };
  groups = {
    active: '',
    total: [
      'general',
      'video responsive survey',
      '500rs',
      'warehouse',
    ]
  };

  constructor(
    private router: Router,
    private allModulesService: AllModulesService,
    private messageService: MessageService
  ) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        $(".main-wrapper").removeClass('slide-nav');
        $(".sidebar-overlay").removeClass('opened');
        const url = event.url.split("/");
        this.urlComplete.mainUrl = url[1];
        this.urlComplete.subUrl = url[2];
        this.urlComplete.childUrl = url[3];
        if (url[1] === "") {
          this.urlComplete.mainUrl = "dashboard";
          this.urlComplete.subUrl = "admin";
        }

        if (url[2] === "chat" || url[2] === "calls") {
          this.sidebarMenus.chat = true;
          this.sidebarMenus.default = false;
        } else {
          this.sidebarMenus.chat = false;
          this.sidebarMenus.default = true;
        }
      }
    });

    this.groups = { ...this.allModulesService.groups };

  }


  ngOnInit(): void {
  //   this.messageService.toggleMessageData.subscribe(message => {
  //     this.toggleCss = message;
  //     console.log(this.toggleCss);

  // });

    // Slide up and down of menus
    $(document).on("click", "#sidebar-menu a", function (e) {
      e.stopImmediatePropagation();
      if ($(this).parent().hasClass("submenu")) {
        e.preventDefault();
      }
      if (!$(this).hasClass("subdrop")) {
        $("ul", $(this).parents("ul:first")).slideUp(350);
        $("a", $(this).parents("ul:first")).removeClass("subdrop");
        $(this).next("ul").slideDown(350);
        $(this).addClass("subdrop");
      } else if ($(this).hasClass("subdrop")) {
        $(this).removeClass("subdrop");
        $(this).next("ul").slideUp(350);
      }
    });
  }

  setActive(member:string) {
    this.allModulesService.members.active = member;
  }

  openPage(urlCode: string) {
    let url = '/main/';
    switch (urlCode) {
      case 'category':
      case 'product':
      case 'vendor':
        url += `register/${URLCODE[urlCode]}`;
        break;
      case 'Import1000':
        url += `import/${URLCODE[urlCode]}`; // 'imports/' + ${URLCODE[urlCode]} // URLCODE.Register5000;
        break;
      case 'management':
        url += `management/${URLCODE[urlCode]}`;
        break;
      case 'notification':
        url += `notification/${URLCODE[urlCode]}`;
        break;
      case 'components':
        url += `components/${URLCODE[urlCode]}`;
        break;
    }
    this.router.navigate([url]);
  }

}
