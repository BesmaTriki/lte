import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudmessageComponent } from './etudmessage.component';

describe('EtudmessageComponent', () => {
  let component: EtudmessageComponent;
  let fixture: ComponentFixture<EtudmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtudmessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtudmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
