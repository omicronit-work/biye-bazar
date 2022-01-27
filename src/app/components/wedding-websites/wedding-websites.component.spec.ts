import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingWebsitesComponent } from './wedding-websites.component';

describe('WeddingWebsitesComponent', () => {
  let component: WeddingWebsitesComponent;
  let fixture: ComponentFixture<WeddingWebsitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeddingWebsitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeddingWebsitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
