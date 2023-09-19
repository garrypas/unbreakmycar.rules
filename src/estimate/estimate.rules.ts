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
    EstimateStatuses.cancelled,
    EstimateStatuses.accepted,
    EstimateStatuses.rejected,
  ],
  [EstimateStatuses.rejected]: [],
};

export const completedStatuses = [EstimateStatuses.completed, EstimateStatuses.not_completed];

export const canChangeState = (
  currentState: EstimateStatuses,
  newState: EstimateStatuses,
) => statusStateMachine[currentState]?.includes(newState);

export const canGiveFeedback = (
  currentState: EstimateStatuses,
) => completedStatuses.includes(currentState);
