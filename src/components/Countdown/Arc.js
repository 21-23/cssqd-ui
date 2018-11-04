import { h, Component } from 'preact';

class Arc extends Component {
    update() {
        this.center = this.props.size / 2;
        this.strokeSize = this.props.size * this.props.strokeSize;
        this.radius = (this.props.size - this.strokeSize) / 2;

        this.props.ctx.lineWidth = this.strokeSize;
        this.props.ctx.strokeStyle = this.props.color;
        this.props.ctx.lineCap = 'round';
    }

    renderToCanvas() {
        const { ctx } = this.props;

        ctx.beginPath();

        ctx.arc(this.center, this.center, this.radius, -Math.PI / 2, Math.PI * 2 * this.props.progress - Math.PI / 2);
        ctx.stroke();

        ctx.closePath();
    }
}

export { Arc };
