import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IrenesheaderComponent } from './irenesheader.component';

describe('IrenesheaderComponent', () => {
  let component: IrenesheaderComponent;
  let fixture: ComponentFixture<IrenesheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrenesheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IrenesheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
