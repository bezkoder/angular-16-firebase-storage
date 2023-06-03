import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadDetailsComponent } from './upload-details.component';

describe('UploadDetailsComponent', () => {
  let component: UploadDetailsComponent;
  let fixture: ComponentFixture<UploadDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadDetailsComponent]
    });
    fixture = TestBed.createComponent(UploadDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
