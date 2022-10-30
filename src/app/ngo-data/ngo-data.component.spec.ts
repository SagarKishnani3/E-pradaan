import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoDataComponent } from './ngo-data.component';

describe('NgoDataComponent', () => {
  let component: NgoDataComponent;
  let fixture: ComponentFixture<NgoDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgoDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgoDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
