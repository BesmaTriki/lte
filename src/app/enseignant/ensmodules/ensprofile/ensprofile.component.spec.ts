import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsprofileComponent } from './ensprofile.component';

describe('EnsprofileComponent', () => {
  let component: EnsprofileComponent;
  let fixture: ComponentFixture<EnsprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnsprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnsprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
