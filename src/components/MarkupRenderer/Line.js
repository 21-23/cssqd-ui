import { h } from 'preact';

import { Attribute } from './Attribute';
import { indentString } from './markup-renderer-helpers';

const ClosingTag = ({ tagName, colors }) => (
    <span>
        {'</'}
        <span style={{ color: colors.tagName }}>{tagName}</span>
        {'>'}
    </span>
);

const OpeningTag = ({ tagName, attributes, selfClosing, colors, text }) => (
    <span>
        {'<'}
        <span style={{ color: colors.tagName }}>{tagName}</span>
        {attributes.map(attr => (
            <Attribute {...attr} colors={colors} />
        ))}
        {selfClosing ? ' />' : '>'}
        {text}
    </span>
);

const Line = ({ indentLevel, indentSize, tagName, attributes, text, closing, selfClosing, empty, colors }) => (
    <div className="line">
        <span>{indentString(indentLevel, indentSize)}</span>
        {closing ? (
            <ClosingTag tagName={tagName} colors={colors} />
        ) : (
            <OpeningTag
                tagName={tagName}
                attributes={attributes}
                selfClosing={selfClosing}
                text={text}
                colors={colors}
            />
        )}

        {empty && !selfClosing ? <ClosingTag tagName={tagName} colors={colors} /> : null}
    </div>
);

export { Line };
