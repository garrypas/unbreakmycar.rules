import { ListingEnums } from './listing.enums';
import { canRelist } from './listing.rules';

describe('listing.rules tests', () => {
  [
    { status: ListingEnums.accepted, expected: false },
    { status: ListingEnums.approved, expected: false },
    { status: ListingEnums.created, expected: false },
    { status: ListingEnums.declined, expected: false },
    { status: ListingEnums.deleted, expected: false },
    { status: ListingEnums.expired, expected: true },
    { status: ListingEnums.relisted, expected: false },
  ].forEach(({ status, expected }) => {
    test(
      `can relist when statis is ${status} should be ${expected}`,
      () => expect(canRelist(status)).toEqual(expected),
    );
  })
});
