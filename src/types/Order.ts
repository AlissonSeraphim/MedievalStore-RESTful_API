export type Order = {
  id: number;
  userId: number;
};

export type OrderWithProductIds = {
  id: number;
  userId: number;
  productIds: number[];
};

export type OrderCreateFields = {
  userId: number
};