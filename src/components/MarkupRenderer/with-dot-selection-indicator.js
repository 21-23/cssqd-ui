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
                width: 100%;
                height: 100%;
                border-radius: 50%;
                border-style: solid;
                border-width: 2px;
                box-sizing: border-box;
            }
        `}</style>
    </span>
);

export const withDotSelectionIndicator = (BaseComponent, colorPalette) => props => (
    <div className="line-container">
        <div className="dot-selection-indicator-container">
            { props.isSelected || props.shouldBeSelected ?
                <SelectionIndicator
                    isSelected={props.isSelected}
                    shouldBeSelected={props.shouldBeSelected}
                    colorPalette={colorPalette}
                /> : null
            }
        </div>

        <BaseComponent {...props} />
        <style jsx>{`
            .line-container {
                display: flex;
                align-items: center;
            }

            .dot-selection-indicator-container {
                width: 1.2em;
                height: 1.2em;
                margin-right: 5px;
                padding: .1em;
                box-sizing: border-box;
            }
        `}</style>
    </div>
);

export const DotSelectionIndicatorColors = {
    validSelection: 'rgba(169, 218, 70, 1)',
    invalidSelection: 'rgba(235, 86, 128, 1)',
};
