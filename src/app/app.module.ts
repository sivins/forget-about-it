import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QuickAddPurchaseComponent } from './quick-add-purchase/quick-add-purchase.component';
import { QuickAdTodoComponent } from './quick-ad-todo/quick-ad-todo.component';
import { QuickAddTodoComponent } from './quick-add-todo/quick-add-todo.component';
import { QuickAddGroceryComponent } from './quick-add-grocery/quick-add-grocery.component';
import { TodosComponent } from './todos/todos.component';
import { GroceriesComponent } from './groceries/groceries.component';
import { BudgetSummaryComponent } from './budget-summary/budget-summary.component';
import { MonthComponent } from './month/month.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { BillsComponent } from './bills/bills.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuickAddPurchaseComponent,
    QuickAdTodoComponent,
    QuickAddTodoComponent,
    QuickAddGroceryComponent,
    TodosComponent,
    GroceriesComponent,
    BudgetSummaryComponent,
    MonthComponent,
    PurchasesComponent,
    BillsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
