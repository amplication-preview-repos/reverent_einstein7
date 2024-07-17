import { ReviewUpdateManyWithoutProductsInput } from "./ReviewUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  name?: string | null;
  description?: string | null;
  price?: number | null;
  category?: string | null;
  reviews?: ReviewUpdateManyWithoutProductsInput;
};
