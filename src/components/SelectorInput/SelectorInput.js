import { h, Component } from 'preact';

import * as Colors from './selector-input-color-palette';

class SelectorInput extends Component {
    render() {
        const {
            onInput,
            disabled,
            value,
            maxLength = 128,
            placeholder = 'Enter your selector here...'
        } = this.props;

        return (
            <input
                type="text"
                onInput={e => onInput(e.target.value)}
                disabled={disabled}
                placeholder={placeholder}
                value={value}
                maxLength={maxLength}
                ref={this.refInput}
            >
                <style jsx>{`
                    input {
                        width: 100%;
                        box-sizing: border-box;
                        outline: none;
                        padding: 20px;
                        background: ${Colors.BACKGROUND};
                        border: 1px solid ${Colors.BORDER};
                        border-radius: 3px;
                        color: ${Colors.TEXT};
                        align-self: center;
                        font-family: monospace;
                        font-size: 16px;
                    }

                    input:focus {
                        border: 1px solid ${Colors.BORDER_FOCUSED};
                        box-shadow:
                            0 0 4px 0px ${Colors.BOX_SHADOW_FOCUSED} inset,
                            0 0 4px 0px ${Colors.BOX_SHADOW_FOCUSED};
                    }

                    input:disabled {
                        background: ${Colors.BACKGROUND_DISABLED};
                        color: ${Colors.TEXT_DISABLED};
                    }

                    input::placeholder {
                        color: ${Colors.PLACEHOLDER};
                    }
                `}</style>
            </input>
        );
    }

    refInput = (node) => {
        this.input = node;
    }

    componentDidUpdate(prevProps) {
        if (prevProps.disabled && !this.props.disabled) {
            this.input.focus();
        }
    }
}

export { SelectorInput };
