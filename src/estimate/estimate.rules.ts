import { EstimateStatuses } from './estimate.enums';

export const statusStateMachine = {
  [EstimateStatuses.accepted]: [
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
export const cancellableStatuses = Object.keys(statusStateMachine).filter(status => statusStateMachine[status].includes(EstimateStatuses.cancelled));

export const canChangeState = (
  currentState: EstimateStatuses,
  newState: EstimateStatuses,
) => statusStateMachine[currentState]?.includes(newState);

export const canGiveFeedback = (
  currentState: EstimateStatuses,
) => completedStatuses.includes(currentState);

export const canCancel = (
  currentState: EstimateStatuses,
) => cancellableStatuses.includes(currentState);
