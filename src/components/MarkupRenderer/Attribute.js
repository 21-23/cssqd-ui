import { h } from 'preact';

const Attribute = ({ name, value, colors }) => (
    <span>
        {' '}
        <span style={{ color: colors.attrName }}>
            { name }
        </span>

        { value ?
            <span>
                {'='}
                <span style={{ color: colors.attrValue }}>
                    {`"${value}"`}
                </span>
            </span> :
            null
        }
    </span>
);

export { Attribute };
