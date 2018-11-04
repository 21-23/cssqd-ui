class Animation {
    constructor({ from, to, duration }) {
        if (Animation._instance) {
            Animation._instance.stopAnimation();
        }

        Animation._instance = this;

        this.from = from;
        this.to = to;
        this.duration = duration;
        this.valueDiff = to - from;
    }

    animate(animationFrameCallback) {
        this.animationStart = Date.now();
        this.animationFrameCallback = animationFrameCallback;
        this._nextAnimationFrame();
    }

    stopAnimation() {
        cancelAnimationFrame(this.rafId);
    }

    _nextAnimationFrame = () => {
        let progress = (Date.now() - this.animationStart) / this.duration;

        if (progress > 1) {
            progress = 1;
        }

        const v = this.from + this.valueDiff * progress;
        this.animationFrameCallback(v);

        if (progress < 1) {
            this.rafId = requestAnimationFrame(this._nextAnimationFrame);
        }
    };
}

export { Animation };
