import { h } from 'preact';

export const withLineBackgroundSelection = (BaseComponent, colorPalette) => props => (
    <div
        className="line-background-selection"
        style={{
            backgroundColor: props.selected ?
                (props.isValidSelection ? colorPalette.validSelection : colorPalette.invalidSelection) :
                'transparent'
        }}
    >
        <BaseComponent {...props} />
    </div>
)
