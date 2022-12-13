import { createProductOwner } from "./create-product-owner";
import { getProductOwners } from "./get-product-owners";
import { updateProductOwner } from "./update-product-owner";

export const productOwners = {
  '/owners': {
    ...getProductOwners,
    ...createProductOwner
  },
  '/owners/{id}':  {
    ...updateProductOwner,
  }
}