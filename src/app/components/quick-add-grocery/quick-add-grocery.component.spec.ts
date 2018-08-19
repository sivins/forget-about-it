import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickAddGroceryComponent } from './quick-add-grocery.component';

describe('QuickAddGroceryComponent', () => {
  let component: QuickAddGroceryComponent;
  let fixture: ComponentFixture<QuickAddGroceryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickAddGroceryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickAddGroceryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
