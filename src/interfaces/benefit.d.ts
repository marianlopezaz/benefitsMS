
export interface IBenefit{
  id: String;
  name: String;
  description: String;
  status: String;
  discountAmount: Number;
  remainingTime: String;
  limit: Number;
  code: String;
  cart_id: String;
  orderId?: String;
}

export interface IResponse{
  success: Boolean;
  data: Object
}
