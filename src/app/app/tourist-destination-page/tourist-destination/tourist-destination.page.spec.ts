import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TouristDestinationPage } from './tourist-destination.page';

describe('TouristDestinationPage', () => {
  let component: TouristDestinationPage;
  let fixture: ComponentFixture<TouristDestinationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TouristDestinationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
