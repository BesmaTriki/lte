import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudcoursComponent } from './etudcours.component';

describe('EtudcoursComponent', () => {
  let component: EtudcoursComponent;
  let fixture: ComponentFixture<EtudcoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtudcoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtudcoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
