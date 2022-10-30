import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundRaiserComponent } from './fund-raiser.component';

describe('FundRaiserComponent', () => {
  let component: FundRaiserComponent;
  let fixture: ComponentFixture<FundRaiserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundRaiserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FundRaiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
