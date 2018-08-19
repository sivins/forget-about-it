import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { QuickAddPurchaseComponent } from './components/quick-add-purchase/quick-add-purchase.component';
import { QuickAddTodoComponent } from './components/quick-add-todo/quick-add-todo.component';
import { QuickAddGroceryComponent } from './components/quick-add-grocery/quick-add-grocery.component';
import { TodosComponent } from './components/todos/todos.component';
import { GroceriesComponent } from './components/groceries/groceries.component';
import { BudgetSummaryComponent } from './components/budget-summary/budget-summary.component';
import { MonthComponent } from './components/month/month.component';
import { PurchasesComponent } from './components/purchases/purchases.component';
import { BillsComponent } from './components/bills/bills.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { PicklistService } from './services/picklist.service';
import { PurchaseService } from './services/purchase.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuickAddPurchaseComponent,
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
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserService, PicklistService, PurchaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
