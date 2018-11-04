import * as Actions from '../actions/participant-actions';
const initialState = [];

const INCORRECT_SOLUTION_KEY = 'incorrect';

export function participantsReducer(state = initialState, action) {
    switch (action.type) {
        case Actions.RECEIVE_PARTICIPANTS:
            return action.payload;

        case Actions.JOIN_PARTICIPANT:
            return [...state, action.payload];

        case Actions.REMOVE_PARTICIPANT:
            return state.filter(p => p.participantId !== action.payload.participantId);

        case Actions.SET_PARTICIPANT_SOLUTION:
            return state.map(participant => {
                if (participant.participantId !== action.payload.participantId) {
                    return participant;
                }

                return {
                    ...participant,
                    inputLength: action.payload.length,
                    solution: {
                        correct: action.payload.correct,
                        time: action.payload.time,
                    },
                };
            });

        case Actions.RESET_SOLUTIONS:
            return state.map(participant => ({
                ...participant,
                inputLength: 0,
                solution: {
                    time: 0,
                    correct: INCORRECT_SOLUTION_KEY,
                },
            }));

        default:
            return state;
    }
}
