import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickAdTodoComponent } from './quick-ad-todo.component';

describe('QuickAdTodoComponent', () => {
  let component: QuickAdTodoComponent;
  let fixture: ComponentFixture<QuickAdTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickAdTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickAdTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
