import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadListComponent } from './upload-list.component';

describe('UploadListComponent', () => {
  let component: UploadListComponent;
  let fixture: ComponentFixture<UploadListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadListComponent]
    });
    fixture = TestBed.createComponent(UploadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
