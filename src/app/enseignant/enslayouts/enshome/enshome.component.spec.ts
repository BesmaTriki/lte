import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnshomeComponent } from './enshome.component';

describe('EnshomeComponent', () => {
  let component: EnshomeComponent;
  let fixture: ComponentFixture<EnshomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnshomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
