import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Purchase } from '../../models/purchase';
import { User } from '../../models/user';

@Component({
  selector: 'app-quick-add-purchase',
  templateUrl: './quick-add-purchase.component.html',
  styleUrls: ['./quick-add-purchase.component.css']
})
export class QuickAddPurchaseComponent implements OnInit {
  form = new FormGroup({
    amount: new FormControl(''),
    purchaseCategoryId: new FormControl(''),
    accountId: new FormControl(''),
    description: new FormControl(''),
    purchaseDate: new FormControl('')
  });

  user: User;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const purchase = new Purchase();
  }

}
