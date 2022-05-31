import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetdiscountComponent } from './getdiscount.component';

describe('GetdiscountComponent', () => {
  let component: GetdiscountComponent;
  let fixture: ComponentFixture<GetdiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetdiscountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetdiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
