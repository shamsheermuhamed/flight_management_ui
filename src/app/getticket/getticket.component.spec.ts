import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetticketComponent } from './getticket.component';

describe('GetticketComponent', () => {
  let component: GetticketComponent;
  let fixture: ComponentFixture<GetticketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetticketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
