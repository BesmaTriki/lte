import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudhomeComponent } from './etudhome.component';

describe('EtudhomeComponent', () => {
  let component: EtudhomeComponent;
  let fixture: ComponentFixture<EtudhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtudhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtudhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
