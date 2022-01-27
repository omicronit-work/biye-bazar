import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCollentionsComponent } from './new-collentions.component';

describe('NewCollentionsComponent', () => {
  let component: NewCollentionsComponent;
  let fixture: ComponentFixture<NewCollentionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCollentionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCollentionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
