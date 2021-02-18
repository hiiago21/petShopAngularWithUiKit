import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingUpPageComponent } from './sing-up-page.component';

describe('SingUpPageComponent', () => {
  let component: SingUpPageComponent;
  let fixture: ComponentFixture<SingUpPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingUpPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingUpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
