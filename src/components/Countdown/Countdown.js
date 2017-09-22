import { h, Component } from 'preact';

const COMPONENT_SIZE_TO_FONT_SIZE_RATIO = 4;

class Countdown extends Component {
    shouldComponentUpdate = () => false
    render = () => <canvas ref={canvas => this.canvas = canvas} />

    componentDidMount() {
        this.ctx = this.canvas.getContext('2d');

        // retina magic start
        // see https://www.html5rocks.com/en/tutorials/canvas/hidpi/

        const backingStoreRatio = this.ctx.webkitBackingStorePixelRatio || 1;
        const devicePixelRatio = window.devicePixelRatio || 1;

        this.ratio = devicePixelRatio / backingStoreRatio;
        this.canvas.style.transformOrigin = '0 0';
        this.canvas.style.transform = `scale(${1 / this.ratio}, ${1 / this.ratio})`;
        // retina magic end

        this._update(this.props);
        this._render();
    }

    componentWillReceiveProps(nextProps) {
        const prevProgress = this.progress;
        this._update(nextProps);

        const newProgress = this.progress;

        if (nextProps.timeRemaining === nextProps.timeAmount) {
            this._render();
        } else {
            this._animate({
                from: prevProgress,
                to: newProgress,
                duration: 1000,
            }, v => {
                this.progress = v;
                this._render();
            });
        }
    }

    componentWillUnmount() {
        this._stopAnimation();
    }

    _update({ size, strokeSize, textFillColor, timeRemaining, timeAmount, arcColor, remainingTimeArcColor }) {
        this.size = size * this.ratio;
        this.strokeSize = strokeSize * this.ratio;

        this.canvas.width = this.size;
        this.canvas.height = this.size;

        this.fontSize = this.size / COMPONENT_SIZE_TO_FONT_SIZE_RATIO;
        this.center = this.size / 2;
        this.radius = (this.size - this.strokeSize) / 2;

        this.ctx.font = `${this.fontSize}px sans-serif`;
        this.ctx.fillStyle = textFillColor;
        this.ctx.lineWidth = this.strokeSize;

        this.ctx.textBaseline = 'middle'
        this.ctx.lineCap = 'round';

        this.text = this._formatText(timeRemaining);
        const { width } = this.ctx.measureText(this.text);

        this.textX = (this.size - width) / 2;
        this.textY = this.size / 2;

        this.progress = timeRemaining / timeAmount;

        this.arcColor = arcColor;
        this.remainingTimeArcColor = remainingTimeArcColor;
    }

    _clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    _render = () => {
        this._clear();
        this._renderText();
        this._renderBackgroundCircle();
        this._renderRemainingTimeArc();
    }

    _renderBackgroundCircle() {
        this.ctx.strokeStyle = this.arcColor;
        this._renderArc({ progress: 1 });
    }

    _renderRemainingTimeArc() {
        this.ctx.strokeStyle = this.remainingTimeArcColor;
        this._renderArc({
            progress: this.progress,
            clockwise: true,
        });
    }

    _renderText() {
        this.ctx.fillText(this.text, this.textX, this.textY);
    }

    _renderArc({ progress, clockwise }) {
        this.ctx.beginPath();

        this.ctx.arc(
            this.center,
            this.center,
            this.radius, -Math.PI / 2,
            Math.PI * 2 * progress - Math.PI / 2,
            !clockwise
        );
        this.ctx.stroke();

        this.ctx.closePath();
    }

    _formatText(timeRemaining) {
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining - (minutes * 60);

        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    _animate({ from, to, duration }, animationCallback) {
        this._stopAnimation();

        this.animationDuration = duration;
        this.animationStart = Date.now();
        this.animationValueDiff = to - from;
        this.animationFromValue = from;
        this.animationCallback = animationCallback;

        this._animationNextFrame();
    }

    _animationNextFrame = () => {
        const now = Date.now();
        let progress = (now - this.animationStart) / this.animationDuration;

        if (progress > 1) {
            progress = 1;
        }

        const v = this.animationFromValue + this.animationValueDiff * progress;

        this.animationCallback(v);

        if (progress < 1) {
            this.animationRaf = requestAnimationFrame(this._animationNextFrame);
        }
    }

    _stopAnimation() {
        if (this.animationRaf) {
            cancelAnimationFrame(this.animationRaf);
        }
    }
}

export { Countdown };
