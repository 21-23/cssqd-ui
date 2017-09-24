import { h, Component } from 'preact';

import { Canvas } from './Canvas';
import { TimeRemainingText } from './TimeRemainingText';
import { Arc } from './Arc';
import { Animation } from './Animation';

const TIMER_TICK_INTERVAL = 1000;

class Countdown extends Component {
    render() {
        return (
            <Canvas ref={canvas => this.canvas = canvas} size={this.props.size}>
                <Arc
                    color={this.props.arcColor}
                    strokeSize={this.props.strokeSize}
                    progress={1}
                />
                <Arc
                    ref={arc => this.progressArc = arc}
                    color={this.props.remainingTimeArcColor}
                    strokeSize={this.props.strokeSize}
                    progress={this.props.timeRemaining / this.props.timeAmount}
                />
                <TimeRemainingText
                    timeRemaining={this.props.timeRemaining}
                    size={this.props.size}
                    textFillColor={this.props.textFillColor}
                />
            </Canvas>
        );
    }

    componentDidUpdate(prevProps) {
        if (this.props.timeRemaining === prevProps.timeRemaining) {
            return;
        }

        if (this.props.timeRemaining === this.props.timeAmount) {
            return;
        }

        const timeRemainingDiff = (prevProps.timeRemaining - this.props.timeRemaining) * 1000;
        let duration;

        if (timeRemainingDiff > 0 && timeRemainingDiff < TIMER_TICK_INTERVAL) {
            duration = timeRemainingDiff
        } else {
            duration = TIMER_TICK_INTERVAL;
        }

        const { timeAmount } = this.props;

        const from = prevProps.timeRemaining / timeAmount;
        const to = this.props.timeRemaining / timeAmount;

        const animation = new Animation({ from, to, duration });

        animation.animate(v => {
            this.progressArc.props.progress = v;
            this.canvas._render();
        });
    }
}

export { Countdown };
