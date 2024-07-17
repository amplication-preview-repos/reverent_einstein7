import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type ReviewWhereInput = {
  id?: StringFilter;
  comment?: StringNullableFilter;
  rating?: FloatNullableFilter;
  user?: UserWhereUniqueInput;
  product?: ProductWhereUniqueInput;
};
