import { h, Component } from 'preact';

import { Line } from './Line';
import { withDotSelectionIndicator, DotSelectionIndicatorColors } from './with-dot-selection-indicator';

import { EditorColors } from './markup-renderer-color-palette';

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
                indentSize={this.props.indentSize}
                colors={this.props.colors}
                isSelected={this.props.actualSelection.indexOf(line.qdId) !== -1}
                shouldBeSelected={this.props.expectedSelection.indexOf(line.qdId) !== -1}
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
            .reduce((flat, chunk) => [...flat, ...chunk], []);

        this.setState({ lines });
    }
}

MarkupRenderer.defaultProps = {
    indentSize: 4,
    colors: EditorColors,
    actualSelection: [],
    LineComponent: withDotSelectionIndicator(Line, DotSelectionIndicatorColors)
};

export { MarkupRenderer };
