import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IrenesfooterComponent } from './irenesfooter.component';

describe('IrenesfooterComponent', () => {
  let component: IrenesfooterComponent;
  let fixture: ComponentFixture<IrenesfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrenesfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IrenesfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
