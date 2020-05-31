import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IfscCodesComponent } from './ifsc-codes.component';

describe('IfscCodesComponent', () => {
  let component: IfscCodesComponent;
  let fixture: ComponentFixture<IfscCodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IfscCodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IfscCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
