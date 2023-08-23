import { Order, OrderCreateFields, OrderWithProductIds } from "../../src/types/Order"

const fakeOrders: Order[] = [
  { id: 1, userId: 1 }
]

const fakeOrderWithoutId: OrderCreateFields = {
  userId: 1
}

const fakeOrderWithProductIds: OrderWithProductIds = {
  id: 1,
  userId: 1,
  productIds: [1, 2]
}

export default {
  fakeOrders,
  fakeOrderWithoutId,
  fakeOrderWithProductIds
}