import * as Actions from '../actions/player-score-actions';

const initialState = {
    totalTime: -1,
    playerPosition: -1,
    totalPlayersCount: -1,
};

export function playerScoreReducer(state = initialState, action) {
    switch (action.type) {
        case Actions.RECEIVE_PLAYER_SCORE: {
            return {
                totalTime: action.payload.score.aggregateScore,
                playerPosition: action.payload.meta.position + 1,
                totalPlayersCount: action.payload.meta.total,
            };
        }

        default:
            return state;
    }
}
