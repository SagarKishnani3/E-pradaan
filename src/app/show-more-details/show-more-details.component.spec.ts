import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMoreDetailsComponent } from './show-more-details.component';

describe('ShowMoreDetailsComponent', () => {
  let component: ShowMoreDetailsComponent;
  let fixture: ComponentFixture<ShowMoreDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMoreDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowMoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
