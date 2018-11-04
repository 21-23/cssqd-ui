export const formatScoreTime = timeInSeconds => {
    if (!timeInSeconds) {
        return '';
    }

    const [, minutes, seconds] = new Date(timeInSeconds * 1000).toTimeString().split(/[:\s]/);
    return `${minutes}:${seconds}`;
};
