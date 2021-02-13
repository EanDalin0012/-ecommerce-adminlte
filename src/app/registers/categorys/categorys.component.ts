import {Component, OnInit} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpService } from '../../m-shares/services/http.service';
import { PopupService } from '../../m-shares/services/popup.service';
import { RequestModel } from '../../m-shares/models/model/request';
import { CategoryModel } from '../../m-shares/models/model/category';

@Component({
  selector: 'app-categorys',
  templateUrl: './categorys.component.html',
  styleUrls: ['./categorys.component.css']
})
export class CategorysComponent implements OnInit {

  categoryList = new Array<CategoryModel>();

  constructor(
    private service: HttpService,
    private modalService: PopupService,
    private dataService: DataService,
    private titleService: Title
  ) {
  }

  ngOnInit(): void {
    this.inquiry();
  }

  inquiry(){
    const trReq = new RequestModel();
    const api = '/api/category/v1/list';
    this.service.HTTPGet(api).then(resp => {
      const response   = resp as any;
      if (response) {

        this.categoryList = response.body;
        this.data          = response.body;
        this.gridData      = this.categoryList;
        this.loadingData(this.category_list);
      }
    });
  }

}
