import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatastudioComponent } from './datastudio.component';

describe('DatastudioComponent', () => {
  let component: DatastudioComponent;
  let fixture: ComponentFixture<DatastudioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatastudioComponent]
    });
    fixture = TestBed.createComponent(DatastudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

