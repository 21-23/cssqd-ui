import { h } from 'preact';

import { Attribute } from './Attribute';
import { indentString } from './markup-renderer-helpers';

const Line = ({ indentLevel, closing, selfClosing, empty, tagName, attributes, colors, text }) => (
    <div>
        <span>{indentString(indentLevel, 4)}</span>
        <span>
            &lt;
            { closing ? '/' : null }
        </span>

        <span style={{ color: colors.tagName }}>
            { tagName }
        </span>

        { !closing && attributes.length ?
            attributes.map(attr => <Attribute {...attr} colors={colors} />) :
            null
        }

        <span>
            { selfClosing ? ' /' : null }
            &gt;
        </span>

        { !closing ? text : null }

        { empty && !selfClosing ?
            <span>
                &lt;/
                <span style={{ color: colors.tagName}}>
                    { tagName }
                </span>
                &gt;
            </span> :
            null
        }
    </div>
);

export { Line };
