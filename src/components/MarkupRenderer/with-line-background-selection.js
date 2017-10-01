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
)
