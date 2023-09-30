import { ListingEnums } from "./listing.enums";

export const canRelist = (listingStatus: ListingEnums) => {
  return listingStatus === ListingEnums.expired;
}