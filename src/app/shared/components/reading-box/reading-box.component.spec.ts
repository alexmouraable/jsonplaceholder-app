import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingBoxComponent } from './reading-box.component';

describe('ReadingBoxComponent', () => {
  let component: ReadingBoxComponent;
  let fixture: ComponentFixture<ReadingBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadingBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
