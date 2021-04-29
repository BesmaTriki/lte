import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnscoursComponent } from './enscours.component';

describe('EnscoursComponent', () => {
  let component: EnscoursComponent;
  let fixture: ComponentFixture<EnscoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnscoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnscoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
