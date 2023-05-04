import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavPeopleComponent } from './nav-people.component';

describe('NavPeopleComponent', () => {
  let component: NavPeopleComponent;
  let fixture: ComponentFixture<NavPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavPeopleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
