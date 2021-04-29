import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsdashboardComponent } from './ensdashboard.component';

describe('EnsdashboardComponent', () => {
  let component: EnsdashboardComponent;
  let fixture: ComponentFixture<EnsdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnsdashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnsdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
