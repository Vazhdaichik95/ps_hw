'use strict';
class Billing {
  amount;

  constructor(amount) {
    this.amount = amount;
  }

  totalAmount() {
    return this.amount;
  }
}

class FixBilling extends Billing{
  constructor(amount) {
    super(amount);
  }
}

class HourBilling extends Billing {
  #hours;

  constructor(amount, hours) {
    super(amount);
    this.#hours = hours;
  }

  totalAmount() {
    return this.#hours*this.amount;
  }
}

class ItemBilling extends Billing {
  #items;

  constructor(amount, items) {
    super(amount);
    this.#items = items;
  }

  totalAmount() {
    return this.#items*this.amount;
  }
}
