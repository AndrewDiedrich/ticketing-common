export enum OrderStatus {
  // when order is created but ticket it's trying to order hasn't been reserved
  Created = 'created',
  // the ticket the order is tyring to reserve has already
  // been reserved, or when the user has cancelled the order
  // The order expires before payment
  Cancelled = 'cancelled',
  // order has successfully reserved the ticket
  AwaitingPayment = 'awaiting:payment',
  // the order has reserved the ticket and the user
  // has provided payment successfully
  Complete = 'complete',
}
