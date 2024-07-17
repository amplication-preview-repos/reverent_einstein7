import { ReviewCreateNestedManyWithoutProductsInput } from "./ReviewCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  name?: string | null;
  description?: string | null;
  price?: number | null;
  category?: string | null;
  reviews?: ReviewCreateNestedManyWithoutProductsInput;
};
