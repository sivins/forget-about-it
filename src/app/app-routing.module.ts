import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MonthComponent } from './components/month/month.component';
import { PurchasesComponent } from './components/purchases/purchases.component';
import { QuickAddTodoComponent } from './components/quick-add-todo/quick-add-todo.component';
import { QuickAddGroceryComponent } from './components/quick-add-grocery/quick-add-grocery.component';
import { TodosComponent } from './components/todos/todos.component';
import { BillsComponent } from './components/bills/bills.component';
import { BudgetSummaryComponent } from './components/budget-summary/budget-summary.component';
import { GroceriesComponent } from './components/groceries/groceries.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'month', component: MonthComponent },
  { path: 'purchases', component: PurchasesComponent },
  { path: 'quick-add-todo', component: QuickAddTodoComponent },
  { path: 'quick-add-grocery', component: QuickAddGroceryComponent },
  { path: 'quick-add-purchase', component: QuickAddGroceryComponent },
  { path: 'todos', component: TodosComponent },
  { path: 'bills', component: BillsComponent },
  { path: 'budget-summary', component: BudgetSummaryComponent },
  { path: 'groceries', component: GroceriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
