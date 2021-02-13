import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ImportProductEditComponent} from './import-product-edit.component';

describe('ImportProductEditComponent', () => {
  let component: ImportProductEditComponent;
  let fixture: ComponentFixture<ImportProductEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImportProductEditComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportProductEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
