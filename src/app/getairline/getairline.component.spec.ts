import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetairlineComponent } from './getairline.component';

describe('GetairlineComponent', () => {
  let component: GetairlineComponent;
  let fixture: ComponentFixture<GetairlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetairlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetairlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
