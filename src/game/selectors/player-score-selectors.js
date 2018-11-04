import { createSelector } from 'reselect';

export const playerScore = state => state.score;
export const playersCount = createSelector(playerScore, score => score.totalPlayersCount);
export const playerPosition = createSelector(playerScore, score => score.playerPosition);
export const totalTime = createSelector(playerScore, score => score.totalTime);

export const hasScore = createSelector(
    playersCount,
    playerPosition,
    totalTime,
    (playersCount, playerPosition, totalTime) => {
        return playerPosition + playersCount + totalTime > 0;
    }
);
