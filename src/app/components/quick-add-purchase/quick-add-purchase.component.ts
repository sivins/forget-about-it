import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Purchase } from '../../models/purchase';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { PicklistItem } from '../../models/picklists';
import { PurchaseService } from '../../services/purchase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quick-add-purchase',
  templateUrl: './quick-add-purchase.component.html',
  styleUrls: ['./quick-add-purchase.component.css']
})
export class QuickAddPurchaseComponent implements OnInit {
  form = new FormGroup({
    amount: new FormControl(''),
    purchaseCategory: new FormControl(''),
    account: new FormControl(''),
    description: new FormControl(''),
    purchaseDate: new FormControl('')
  });

  user: User;

  constructor(
    private userService: UserService,
    private purchaseService: PurchaseService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userService.get().subscribe((user: User) => {
      this.user = user;
    });
  }

  onSubmit() {
    const purchase = new Purchase();
    purchase.UserId = this.user.UserId;
    /*
    if (this.form.get('purchaseCategory').value) {
      purchase.PurchaseCategoryId = JSON.parse(this.form.get('purchaseCategory').value).id;
    }
    if (this.form.get('account').value) {
      purchase.AccountId = JSON.parse(this.form.get('account').value).id;
    }
    */
    // TODO: Remove
    purchase.AccountId = 1;

    purchase.Description = this.form.get('description').value;
    purchase.Amount = this.form.get('amount').value;
    purchase.PurchaseDate = this.form.get('purchaseDate').value;

    this.purchaseService.put(purchase).subscribe((response) => {
      this.router.navigate(['/home']);
    });
  }

}
