export async function pause(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

export function randomInt({ min = 0, max = 1000 }) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
