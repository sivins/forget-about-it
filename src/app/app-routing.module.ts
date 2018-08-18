import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MonthComponent } from './month/month.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { QuickAddTodoComponent } from './quick-add-todo/quick-add-todo.component';
import { QuickAddGroceryComponent } from './quick-add-grocery/quick-add-grocery.component';
import { TodosComponent } from './todos/todos.component';
import { BillsComponent } from './bills/bills.component';
import { BudgetSummaryComponent } from './budget-summary/budget-summary.component';
import { GroceriesComponent } from './groceries/groceries.component';

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
