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
        this._render(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this._update(nextProps);
        this._render(nextProps);
    }

    _update({ size, strokeSize, textFillColor }) {
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
    }

    _clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    _render({ size, fontSize, arcColor, remainigTimeArcColor, timeAmount, timeRemaining }) {
        this._clear();
        this._renderText({ timeRemaining });

        this.ctx.strokeStyle = arcColor;
        this._renderArc({ progress: 1 });

        this.ctx.strokeStyle = remainigTimeArcColor;
        this._renderArc({
            progress: timeRemaining / timeAmount,
            clockwise: true,
        });
    }

    _renderText({ timeRemaining }) {
        const text = this._formatText(timeRemaining);
        const { width } = this.ctx.measureText(text);
        const textX = (this.size - width) / 2;
        const textY = this.size / 2;

        this.ctx.fillText(text, textX, textY);
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
}

export { Countdown };
