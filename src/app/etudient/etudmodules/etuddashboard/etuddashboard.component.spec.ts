import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtuddashboardComponent } from './etuddashboard.component';

describe('EtuddashboardComponent', () => {
  let component: EtuddashboardComponent;
  let fixture: ComponentFixture<EtuddashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtuddashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtuddashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
