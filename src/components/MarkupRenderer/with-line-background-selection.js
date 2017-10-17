import { h } from 'preact';

function resolveBackgroundColor({ isSelected, shouldBeSelected }, colorPalette) {
    if (shouldBeSelected && !isSelected) {
        return colorPalette.expectedSelection;
    }

    if (shouldBeSelected && isSelected) {
        return colorPalette.validSelection;
    }

    if (isSelected) {
        return colorPalette.invalidSelection;
    }

    return 'transparent';
}

export const withLineBackgroundSelection = (BaseComponent, colorPalette) => props => (
    <div
        className="line-background-selection"
        style={{ backgroundColor: resolveBackgroundColor(props, colorPalette) }}
    >
        <BaseComponent {...props} />
    </div>
);

export const LineBackgroundSelectionColors = {
    expectedSelection: 'rgba(169, 218, 70, 0.2)',
    validSelection: 'rgba(169, 218, 70, 0.3)',
    invalidSelection: 'rgba(235, 86, 128, 0.3)',
};

