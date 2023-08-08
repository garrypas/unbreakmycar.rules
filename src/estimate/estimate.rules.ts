import { EstimateStatuses } from './estimate.enums';

export const statusStateMachine = {
  [EstimateStatuses.accepted]: [
    EstimateStatuses.cancelled,
    EstimateStatuses.completed,
    EstimateStatuses.not_completed,
  ],
  [EstimateStatuses.cancelled]: [],
  [EstimateStatuses.completed]: [],
  [EstimateStatuses.not_completed]: [],
  [EstimateStatuses.pending]: [
    EstimateStatuses.accepted,
    EstimateStatuses.rejected,
  ],
  [EstimateStatuses.rejected]: [],
};

export const canChangeState = (
  currentState: EstimateStatuses,
  newState: EstimateStatuses,
) => statusStateMachine[currentState]?.includes(newState);
