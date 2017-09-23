import { h, Component } from 'preact';

const COMPONENT_SIZE_TO_FONT_SIZE_RATIO = 4;

class TimeRemainingText extends Component {
    update() {
        this.fontSize = this.props.size / COMPONENT_SIZE_TO_FONT_SIZE_RATIO;

        this.props.ctx.font = `${this.fontSize}px sans-serif`;
        this.props.ctx.fillStyle = this.props.textFillColor;
        this.props.ctx.textBaseline = 'middle'

        this.text = this._formatText(this.props.timeRemaining);
        const { width } = this.props.ctx.measureText(this.text);

        this.textX = (this.props.size - width) / 2;
        this.textY = this.props.size / 2;
    }

    renderToCanvas() {
        this.props.ctx.fillText(this.text, this.textX, this.textY);
    }

    _formatText(timeRemaining) {
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining - (minutes * 60);

        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
}

export { TimeRemainingText };
