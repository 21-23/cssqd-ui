import { h, Component } from 'preact';

import { Line } from './Line';
import { transform, traverse } from './markup-renderer-helpers';

class MarkupRenderer extends Component {
    state = {
        lines: [],
    }

    componentDidMount() {
        this.container = document.createElement('div');
        this._processMarkup(this.props.source);
    }

    componentWillReceiveProps(nextProps) {
        this._processMarkup(nextProps.source);
    }

    render() {
        const { LineComponent } = this.props;

        const lines = this.state.lines.map(line => (
            <LineComponent
                {...line}
                colors={this.props.colors}
                selected={this.props.actualSelection.indexOf(line.qdId) !== -1}
                isValidSelection={this.props.expectedSelection.indexOf(line.qdId) !== -1}
            />
        ));

        return (
            <pre style={{ color: this.props.colors.primary }}>
                { lines }

                <style jsx>{`
                    pre {
                        color: #fff;
                        font-family: monospace;
                    }

                    .line {
                        line-height: 1.2;
                    }
                `}</style>
            </pre>
        );
    }

    _processMarkup(markup) {
        this.container.innerHTML = markup;

        const lines = Array.from(this.container.children)
            .map(root => Array.from(traverse(root)))
            .reduce((chunk, flattened) => flattened.concat(chunk), []);

        this.setState({ lines });
    }
}

export { MarkupRenderer };
