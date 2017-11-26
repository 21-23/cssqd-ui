import { createAction } from 'redux-actions';

export const RECEIVE_PARTICIPANTS = 'RECEIVE_PARTICIPANTS';
export const receiveParticipants = createAction(RECEIVE_PARTICIPANTS);

export const JOIN_PARTICIPANT = 'JOIN_PARTICIPANT';
export const joinParticipant = createAction(JOIN_PARTICIPANT);

export const REMOVE_PARTICIPANT = 'REMOVE_PARTICIPANT';
export const removeParticipant = createAction(REMOVE_PARTICIPANT);

export const SET_PARTICIPANT_SOLUTION = 'SET_PARTICIPANT_SOLUTION';
export const setParticipantSolution = createAction(SET_PARTICIPANT_SOLUTION);

export const RESET_SOLUTIONS = 'RESET_SOLUTIONS';
export const resetSolutions = createAction(RESET_SOLUTIONS);
