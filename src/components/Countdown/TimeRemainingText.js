import { h, Component } from 'preact';
import { formatScoreTime } from 'shared/formatters';

const COMPONENT_SIZE_TO_FONT_SIZE_RATIO = 4;

class TimeRemainingText extends Component {
    update() {
        this.fontSize = this.props.size / COMPONENT_SIZE_TO_FONT_SIZE_RATIO;

        this.props.ctx.font = `${this.fontSize}px sans-serif`;
        this.props.ctx.fillStyle = this.props.textFillColor;
        this.props.ctx.textBaseline = 'middle';

        this.text = formatScoreTime(this.props.timeRemaining);
        const { width } = this.props.ctx.measureText(this.text);

        this.textX = (this.props.size - width) / 2;
        this.textY = this.props.size / 2;
    }

    renderToCanvas() {
        this.props.ctx.fillText(this.text, this.textX, this.textY);
    }
}

export { TimeRemainingText };
