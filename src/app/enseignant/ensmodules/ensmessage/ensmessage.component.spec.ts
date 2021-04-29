import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsmessageComponent } from './ensmessage.component';

describe('EnsmessageComponent', () => {
  let component: EnsmessageComponent;
  let fixture: ComponentFixture<EnsmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnsmessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnsmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
