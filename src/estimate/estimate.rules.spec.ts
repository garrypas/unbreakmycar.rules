import { EstimateStatuses } from './estimate.enums';
import { canChangeState } from './estimate.rules';

describe('estimate.rules tests', () => {
  test('Can change to accepted if pending', () => {
    expect(
      canChangeState(EstimateStatuses.pending, EstimateStatuses.accepted),
    ).toBeTruthy();
  });

  test('Cannot change to accepted if not pending', () => {
    expect(
      canChangeState(EstimateStatuses.completed, EstimateStatuses.accepted),
    ).toBeFalsy();
  });

  test('Can change to rejected if pending', () => {
    expect(
      canChangeState(EstimateStatuses.pending, EstimateStatuses.rejected),
    ).toBeTruthy();
  });

  test('Cannot change to rejected if not pending', () => {
    expect(
      canChangeState(EstimateStatuses.completed, EstimateStatuses.rejected),
    ).toBeFalsy();
  });
});
