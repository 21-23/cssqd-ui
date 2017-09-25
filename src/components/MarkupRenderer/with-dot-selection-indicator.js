import { h } from 'preact';

function resolveBackgroundColor(isSelected, shouldBeSelected, colorPalette) {
    if (!isSelected) {
        return 'transparent';
    }

    if (shouldBeSelected) {
        return colorPalette.validSelection;
    } else {
        return colorPalette.invalidSelection;
    }
}

const SelectionIndicator = ({ isSelected, shouldBeSelected, colorPalette }) => (
    <span
        className="dot-selection-indicator"
        style={{
            background: resolveBackgroundColor(isSelected, shouldBeSelected, colorPalette),
            borderColor: shouldBeSelected ? colorPalette.validSelection : 'transparent',
        }}
    >
        <style jsx>{`
            .dot-selection-indicator {
                display: inline-block;
                width: .9em;
                height: .9em;
                position: absolute;
                left: 0;
                bottom: 0;
                top: 0;
                margin: auto;
                border-radius: 50%;
                border-style: solid;
                border-width: 2px;
                border-color: transparent;
                box-sizing: border-box;
            }
        `}</style>
    </span>
);

export const withDotSelectionIndicator = (BaseComponent, colorPalette) => props => (
    <div className="dot-selection-indicator-container">
        { props.isSelected || props.shouldBeSelected ?
            <SelectionIndicator
                isSelected={props.isSelected}
                shouldBeSelected={props.shouldBeSelected}
                colorPalette={colorPalette}
            /> : null
        }

        <BaseComponent {...props} />
        <style jsx>{`
            .dot-selection-indicator-container {
                padding-left: 1.1em;
                position: relative;
            }
        `}</style>
    </div>
)
