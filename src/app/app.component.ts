import { Component } from '@angular/core';
import { PartyInviteModel } from './party-invite.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model: PartyInviteModel;
  menuDishes: Array<string> = [];
  isFormSubmitted = false;

  constructor() { }

  ngOnInit() {
    this.model = new PartyInviteModel();

    this.menuDishes.push('Mains');
    this.menuDishes.push('Salad');
    this.menuDishes.push('Dessert');
    this.menuDishes.push('Drinks');
    this.menuDishes.push('Sides/Appetizers');
  }

  updateBasket($event: any, dish: string) {
    if ($event.target.checked) {
      this.model.guestItems.push(dish);
    }
    else {
      const index = this.model.guestItems.indexOf(dish);
      this.model.guestItems.splice(index, 1);
    }
  }

  submitForm() {
    debugger;
    this.isFormSubmitted = true;
    //TODO: send data to backend
    console.log(this.model);
  }
}
