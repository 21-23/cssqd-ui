import { h } from 'preact';

const SelectionIndicator = ({ isValidSelection, colorPalette }) => (
    <span
        className="dot-selection-indicator"
        style={{
            background: isValidSelection ?
                colorPalette.validSelection :
                colorPalette.invalidSelection,
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
        `}</style>
    </span>
);

export const withDotSelectionIndicator = (BaseComponent, colorPalette) => props => (
    <div className="dot-selection-indicator-container">
        { props.selected ?
            <SelectionIndicator
                isValidSelection={props.isValidSelection}
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
