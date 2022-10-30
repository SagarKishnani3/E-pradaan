import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundRaiserDataComponent } from './fund-raiser-data.component';

describe('FundRaiserDataComponent', () => {
  let component: FundRaiserDataComponent;
  let fixture: ComponentFixture<FundRaiserDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundRaiserDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FundRaiserDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
