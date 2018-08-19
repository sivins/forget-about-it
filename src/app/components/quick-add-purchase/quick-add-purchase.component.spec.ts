import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickAddPurchaseComponent } from './quick-add-purchase.component';

describe('QuickAddPurchaseComponent', () => {
  let component: QuickAddPurchaseComponent;
  let fixture: ComponentFixture<QuickAddPurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickAddPurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickAddPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
