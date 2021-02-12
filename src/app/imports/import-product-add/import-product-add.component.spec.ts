import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportProductAddComponent } from './import-product-add.component';

describe('ImportProductAddComponent', () => {
  let component: ImportProductAddComponent;
  let fixture: ComponentFixture<ImportProductAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportProductAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportProductAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
