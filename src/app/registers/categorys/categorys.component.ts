import {Component, OnInit} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpService } from '../../m-shares/services/http.service';
import { PopupService } from '../../m-shares/services/popup.service';
import { RequestModel } from '../../m-shares/models/model/request';
import { CategoryModel } from '../../m-shares/models/model/category';
import { MessageService } from '../../m-shares/services/message.service';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { orderBy, SortDescriptor } from '@progress/kendo-data-query';

@Component({
  selector: 'app-categorys',
  templateUrl: './categorys.component.html',
  styleUrls: ['./categorys.component.css']
})
export class CategorysComponent implements OnInit {

  gridData: any[];
  gridView: GridDataResult;
  skip = 0;
  pageSize = 10;
  public sort: SortDescriptor[] = [{
    field: 'id',
    dir: 'asc'
  }];


  categoryList = new Array<CategoryModel>();
  data  = Array<CategoryModel>();

  totalRecord = 0;

  constructor(
    private service: HttpService,
    private modalService: PopupService,
    private dataService: MessageService,
    private titleService: Title
  ) {
  }

  ngOnInit(): void {
    this.inquiry();
  }

  inquiry(){
    const api = '/api/category/v1/list';
    this.service.HTTPGet(api).then(resp => {
      const response   = resp as any;
      if (response) {

        this.categoryList = response.body;
        this.data          = response.body;
        this.gridData      = this.categoryList;
        this.loadingData(this.categoryList);
      }
    });
  }

  // kendo grid
  loadingData(data) {
    if (data) {
      this.gridView = {
        data: orderBy(data.slice(this.skip, this.skip + this.pageSize), this.sort),
        total: data.length
      };
    }
    this.totalRecord = data.length;
  }

  // end kendo grid
}
