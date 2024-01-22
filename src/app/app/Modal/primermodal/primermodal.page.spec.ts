import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrimermodalPage } from './primermodal.page';

describe('PrimermodalPage', () => {
  let component: PrimermodalPage;
  let fixture: ComponentFixture<PrimermodalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PrimermodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
