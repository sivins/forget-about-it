import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickAddTodoComponent } from './quick-add-todo.component';

describe('QuickAddTodoComponent', () => {
  let component: QuickAddTodoComponent;
  let fixture: ComponentFixture<QuickAddTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickAddTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickAddTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
