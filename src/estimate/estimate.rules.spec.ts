import { EstimateStatuses } from './estimate.enums';
import { canChangeState, canGiveFeedback } from './estimate.rules';

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

  test('Can give feedback when completed', () => {
    expect(
      canGiveFeedback(EstimateStatuses.completed),
    ).toBeTruthy();
  });

  test('Can give feedback when not_completed', () => {
    expect(
      canGiveFeedback(EstimateStatuses.completed),
    ).toBeTruthy();
  });

  test('Cannot give feedback when not in a completed state', () => {
    expect(
      canGiveFeedback(EstimateStatuses.completed),
    ).toBeTruthy();
  });
});
